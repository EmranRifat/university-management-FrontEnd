export interface IMeta{
    limit: number;
    page:number;
    size:number;
}

export type ResponseSuccessType={
    data:any;
    meta?:IMeta;
}

export type ResponseErrorType={
    message:string;
    statusCode:number;
    errorMessages:ErrorMessage[];
}

export type ErrorMessage={
    path:string | number;
    message:string;
}