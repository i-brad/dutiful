export interface IError {
    message: string;
    status: boolean;
    errors: {
        [x: string]: error
    }
}

interface error {
    [x: string]: string[]
}