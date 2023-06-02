export interface IError {
    message: string;
    error: string;
    status: boolean;
    errors: {
        [x: string]: string[]
    } | string | null
}

interface ContactSupportProps {
    name: string;
    email: string;
    business_type?: string;
    subject: string;
    message: string;
}