export enum ErrorsCode{
    ErrorAuht= 401,
    Success = 200,
    Failure = 600,
}

export interface ResponseAuth{ 
    status: string, 
    data: any, 
    code: number
}
const userAuthResponse={
    [ErrorsCode.ErrorAuht]: { status: "error", data: "Un error ha ocurrido en la autenticación del usuario", code: ErrorsCode.ErrorAuht} as ResponseAuth,
    [ErrorsCode.Success]: { status: "success", data: "",code: ErrorsCode.Success, } as ResponseAuth,
    [ErrorsCode.Failure]: { status: "failure", data: "Un error no controlado ha ocurrido, porfavor comuniquese con el administrador",code: ErrorsCode.Failure, } as ResponseAuth

}
export {userAuthResponse} 