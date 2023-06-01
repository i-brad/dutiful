const BACKEND_URLS = {
    baseURl: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
    auth: {
        register: '/auth/register/',
        login: '/auth/login/',
        resendOtp: '/auth/email/resend',
        me: '/auth/me/',
        forgotPassword: "/auth/password/email",
        resetPassword: '/auth/password/reset',
        verifyEmail: "/auth/email/verify",
        verifyPasswordResetOtp: "/auth/password/verify"
    },
};

export default BACKEND_URLS;