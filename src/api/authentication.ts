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
import { useResetRecoilState, useSetRecoilState } from 'recoil';
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
                Cookies.set(config.key.token, data.data.token, { expires: 2 });
                setUser(data.user)
                toast.success(data.message);

                if (data.data.user.email_verified) {
                    setAuth({ isLoggedIn: true, emailVerified: true })
                    router.push("/")
                    return
                }
                setAuth({ isLoggedIn: true })
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

export const useResendOtp = () => {
    return useMutation(() => {
        return instance
            .post(BACKEND_URLS.auth.resendOtp, null, configOptions())
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
    const setAuth = useSetRecoilState(AuthState)
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
                // console.log(data);
                toast.success(data.message);
                setAuth({ isLoggedIn: true, emailVerified: true })
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
    const token = Cookies.get(config.key.token);
    const setUser = useSetRecoilState(userState);
    const setAuth = useSetRecoilState(AuthState)
    return useQuery(
        ['getUser'],
        () =>
            instance
                .get(BACKEND_URLS.auth.me, configOptions())
                .then((res) => {
                    return res.data;
                })
                .catch((err) => {
                    throw err.response.data;
                }),
        {
            retry: false,
            enabled: token ? true : false,
            onSuccess: (data) => {
                // console.log(data)
                if (data.data.email_verified) {
                    setUser(data.data);
                    setAuth({ isLoggedIn: true, emailVerified: true })
                }
            },
            onError: (err: IError) => {
                console.log(err)
            },
        },
    );
};

export const useLogout = () => {
    const resetUser = useResetRecoilState(userState);
    const resetAuth = useResetRecoilState(AuthState)
    return useMutation(() => {
        return instance
            .post(BACKEND_URLS.auth.logout, null, configOptions())
            .then((res) => res.data)
            .catch((err) => {
                throw err.response.data;
            });
    },
        {
            onSuccess: (data) => {
                toast.success(data.message);
                Cookies.remove(config.key.token);
                resetUser()
                resetAuth()
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