const BACKEND_URLS = {
    baseURl: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
    auth: {
        register: '/auth/register/',
        login: '/auth/login/',
        logout: "auth/logout/",
        resendOtp: '/auth/email/resend/',
        me: '/auth/user/',
        forgotPassword: "/auth/password/email/",
        resetPassword: '/auth/password/reset/',
        verifyEmail: "/auth/email/verify/",
        verifyPasswordResetOtp: "/auth/password/verify/",
        support: "/contact"
    },
};

export default BACKEND_URLS;