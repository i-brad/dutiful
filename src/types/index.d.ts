export interface IError {
    message: string;
    error: string;
    status: boolean;
    errors: {
        [x: string]: string[]
    } | string | null
}