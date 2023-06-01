const BACKEND_URLS = {
    baseURl: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
    auth: {
        register: '/auth/register/',
        login: '/auth/login/',
        resendToken: '/auth/resend-email-verification/',
        refreshToken: '/auth/refresh/',
        me: '/auth/me/',
        resetPassword: '/auth/password-reset/',
        confirmEmail: '/auth/email-confirmation/',
        newPassword: '/auth/user/password-change/',
        profileImageUpload: '/auth/profile-image/upload/',
        profileImageRemove: '/auth/profile-image/delete/',
        updateUser: '/auth/update/user/',
        deleteUser: '/auth/delete/user/',
        notification: '/notification/',
    },
};

export default BACKEND_URLS;