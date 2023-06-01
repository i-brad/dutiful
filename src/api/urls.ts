const BACKEND_URLS = {
    baseURl: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
    auth: {
        register: '/auth/register/',
        login: '/auth/login/',
        resendToken: '/auth/resend-email-verification/',
        refreshToken: '/auth/refresh/',
        me: '/auth/me/',
        forgotPassword: "/auth/password/email",
        resetPassword: '/auth/password-reset/',
        newPassword: '/auth/user/password-change/',
    },
};

export default BACKEND_URLS;