import { configOptions, instance } from '@api/httpConfig';
import BACKEND_URLS from '@api/urls';
import { AuthState } from '@atoms/authenticationState';
import { userState } from '@atoms/userState';
import { verifyOtpState } from '@atoms/verifyOtpState';
import { useMutation, useQuery } from '@tanstack/react-query';
import config from '@utils/config';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { toast } from "react-hot-toast";
import { useSetRecoilState } from 'recoil';
import { LoginDetails, SignupDetails, forgotPassword, resetPassword } from 'types/authentication';
import { IError } from 'types/index';

export const useLogin = () => {
    const setUser = useSetRecoilState(userState)
    const setAuth = useSetRecoilState(AuthState)
    const setVerifyOtpState = useSetRecoilState(verifyOtpState)
    const router = useRouter()
    return useMutation(
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
                // console.log(data)
                Cookies.set(config.key.token, data.data.token);
                setUser(data.user)
                toast.success(data.message);
                setAuth({ isLoggedIn: true })

                if (data.data.user.email_verified) {
                    router.push("/")
                    return
                }
                setVerifyOtpState({ type: "email", email: data.data.user.email })
                toast.success("Verify your email");
                router.push("/auth/verify")
            },
            onError: (err: IError) => {
                toast.error(err.message);
            },
        },
    );
}

// for signup
export const useSignup = () => {
    const setUser = useSetRecoilState(userState)
    const router = useRouter()
    return useMutation((values: SignupDetails) => {
        return instance
            .post(BACKEND_URLS.auth.register, values)
            .then((res) => res.data)
            .catch((err) => {
                throw err.response.data;
            });
    }, {
        onSuccess: (data) => {
            // console.log(data)
            Cookies.set(config.key.token, data.token);
            setUser(data.user)
            toast.success(data.message);
            toast.success("You can now log in");
            router.push("/auth/login")
        },
        onError: (err: IError) => {
            // console.log(err)
            if (err.errors) {
                Object.entries(err.errors).map(([key, value]) => {
                    toast.error(value[0]);
                })
                return
            }
            toast.error(err.message);
        },
    });
};

type ResendOtp = {
    email: string;
};
export const useResendOtp = () => {
    return useMutation((values: ResendOtp) => {
        return instance
            .post(BACKEND_URLS.auth.resendOtp, values, configOptions())
            .then((res) => res.data)
            .catch((err) => {
                throw err.response.data;
            });
    },
        {
            onSuccess: (data) => {
                toast.success(data.message);
            },
            onError: (err: IError) => {
                console.log(err)
                if (err.error) {
                    toast.error(err.error);
                    return;
                }
                if (err.errors) {
                    Object.entries(err.errors).map(([key, value]) => {
                        toast.error(value[0]);
                    })
                    return
                }
                toast.error(err.message);
            },
        });
};

type emailVerifyOtp = {
    otp: string;
};
export const useEmailVerify = () => {
    return useMutation((values: emailVerifyOtp) => {
        return instance
            .post(BACKEND_URLS.auth.verifyEmail, values, configOptions())
            .then((res) => res.data)
            .catch((err) => {
                throw err.response.data;
            });
    },
        {
            onSuccess: (data) => {
                toast.success(data.message);
            },
            onError: (err: IError) => {
                // console.log(err)
                if (err.error) {
                    toast.error(err.error);
                    return;
                }
                if (err.errors) {
                    Object.entries(err.errors).map(([key, value]) => {
                        toast.error(value[0]);
                    })
                    return
                }
                toast.error(err.message);
            },
        });
};

type passwordVerifyOtp = {
    email: string;
    otp: string;
};
export const usePasswordResetVerifyOtp = () => {
    return useMutation((values: passwordVerifyOtp) => {
        return instance
            .post(BACKEND_URLS.auth.verifyPasswordResetOtp, values)
            .then((res) => res.data)
            .catch((err) => {
                throw err.response.data;
            });
    },
        {
            onSuccess: (data) => {
                console.log(data)
                toast.success(data.message);
            },
            onError: (err: IError) => {
                // console.log(err)
                if (err.error) {
                    toast.error(err.error);
                    return;
                }
                if (err.errors) {
                    Object.entries(err.errors).map(([key, value]) => {
                        toast.error(value[0]);
                    })
                    return
                }
                toast.error(err.message);
            },
        });
};

// useForgotPassword
export const useResetPassword = () => {
    const router = useRouter()
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
            router.push("/auth/login")
        },
        onError: (err: IError) => {
            if (err.error) {
                toast.error(err.error);
                return;
            }
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
            // console.log(data)
            toast.success(data.message);

        },
        onError: (err: IError) => {
            console.log(err)
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
