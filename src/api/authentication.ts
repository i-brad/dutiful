import { configOptions, instance } from '@api/httpConfig';
import BACKEND_URLS from '@api/urls';
import { userState } from '@atoms/userState';
import { useMutation, useQuery } from '@tanstack/react-query';
import config from '@utils/config';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { toast } from "react-hot-toast";
import { useSetRecoilState } from 'recoil';
import { LoginDetails, forgotPassword, resetPassword } from 'types/authentication';
import { IError } from 'types/index';

export const useLogin = () =>
    useMutation(
        (values: LoginDetails) => {
            return instance
                .post(BACKEND_URLS.auth.login, values)
                .then((res) => res.data)
                .catch((err) => {
                    throw err.response.data;
                });
        },
        {
            onSuccess: (data) => {
                // Cookies.set(config.key.token, data.access_token);
                // Cookies.set(config.key.refreshToken, data.refresh_token);
                console.log(data)
                toast.success(data.message);
            },
            onError: (err: IError) => {
                toast.error(err.message);
            },
        },
    );

// for signup
type SignupDetails = {
    username: string;
    password: string;
};

export const useSignup = () => {
    return useMutation((values: SignupDetails) => {
        return instance
            .post(BACKEND_URLS.auth.register, values)
            .then((res) => res.data)
            .catch((err) => {
                throw err.response.data;
            });
    });
};

type ResendEmail = {
    email: string;
};
export const useResendMail = () => {
    return useMutation((values: ResendEmail) => {
        return instance
            .post(BACKEND_URLS.auth.resendToken, values)
            .then((res) => res.data)
            .catch((err) => {
                throw err.response.data;
            });
    });
};

// useForgotPassword
export const useResetPassword = () => {
    return useMutation((values: resetPassword) => {
        return instance
            .post(BACKEND_URLS.auth.resetPassword, values)
            .then((res) => res.data)
            .catch((err) => {
                throw err.response.data;
            });
    }, {
        onSuccess: (data) => {
            console.log(data)
            toast.success(data.message);
        },
        onError: (err: IError) => {
            toast.error(err.message);
        },
    });
};

// useForgotPassword
export const useForgotPassword = () => {
    return useMutation((values: forgotPassword) => {
        return instance
            .post(BACKEND_URLS.auth.forgotPassword, values)
            .then((res) => res.data)
            .catch((err) => {
                throw err.response.data;
            });
    }, {
        onSuccess: (data) => {
            console.log(data)
            toast.success(data.message);
        },
        onError: (err: IError) => {
            toast.error(err.message);
        },
    },);
};

export const useGetUser = () => {
    const router = useRouter();
    const setUser = useSetRecoilState(userState);
    return useQuery(
        ['getUser'],
        () =>
            instance
                .get(BACKEND_URLS.auth.me, configOptions())
                .then((res) => {
                    console.log(res.data, 'testing');
                    setUser(res.data);
                    return res.data;
                })
                .catch((err) => {
                    throw err.response.data;
                }),
        {
            retry: false,
            onSuccess: (data) => {
                if (data) {
                    localStorage.setItem(config.key.user, JSON.stringify(data));
                    setUser(data);
                }
            },
            onError: (err: { status: number }) => {
                if (err?.status >= 500) {
                    router.push('/500');
                }
            },
        },
    );
};

export const useGetRefreshToken = (execute: boolean) => {
    const token = Cookies.get(config.key.refreshToken);

    return useQuery(
        ['getRefreshToken'],
        () =>
            instance
                .get(`${BACKEND_URLS.auth.refreshToken}?token=${token}`)
                .then((res) => res.data)
                .catch((err) => {
                    throw err.response.data;
                }),
        {
            retry: false,
            enabled: execute,
        },
    );
};

type ChangePassword = {
    old_password: string;
    new_password: string;
};

export const useChangePassword = () => {
    return useMutation(
        (values: ChangePassword) =>
            instance
                .patch(BACKEND_URLS.auth.newPassword, values, configOptions())
                .then((res) => res.data)
                .catch((err) => {
                    throw err.response.data;
                }),
        {
            onSuccess: (data) => {
                toast.success(data.message);
            },
            onError: (err: IError) => {

                toast.error(err.message);
            },
        },
    );
};

export const logOutUserReq = () => {
    Cookies.remove(config.key.token);
    Cookies.remove(config.key.refreshToken);
    localStorage.clear();
};
