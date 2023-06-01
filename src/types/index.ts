export interface IError {
    detail: Detail[] | string;
}

export interface Detail {
    loc: string[];
    msg: string;
    type: string;
}