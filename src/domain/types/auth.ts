export type RegisterUserData = {
    data: RegisterUserUseCaseType
}

export type RegisterUserUseCaseType = {
    name:string;
    lastName?:string;
    email:string;
    password:string
    role?:string
}