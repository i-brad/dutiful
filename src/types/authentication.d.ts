export type LoginDetails = {
    email: string;
    password: string;
};

export type forgotPassword = {
    email: string;
};

export type resetPassword = {
    otp: string,
    email: string;
    password: string
};

export type SignupDetails = {
    user: string;
    name: string;
    email: string;
    phone: string;
    password: string;
};