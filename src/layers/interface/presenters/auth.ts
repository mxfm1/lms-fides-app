
export const EmailRegisterPresenter = (data:EmailRegisterData) => {
    return {
        success: data.success,
        message: data.message,
        user: {
            id: data.user.user.email,
            name: data.user.user.name,
            email: data.user.user.email
        }
    }
}

export const infraRegisterUserPresenter = (userData: {token?:string | null, user:any}) => {
    
    if(!userData.user){
        return {
            success:false,
            message:"Error al registrar el usuario",
            user:null
        }
    }
    return {
        success:true,
        message:"Usuario registrado con éxito",
        user: userData.user
    }
    // const { success, message,user} = data

    // const normalizedUser = {
    //     id: user.user.id,
    //     email: user.user.email,
    //     name: user.user.name,
    //     image: user.user.image ?? null,
    //     emailVerified: user.user.emailVerified,
    //     createdAt: user.user.createdAt,
    //     updatedAt: user.user.updatedAt,
    //     token: "token" in user ? user.token : null,
    // };

    // return {
    //     success,
    //     message,
    //     user: normalizedUser
    // }
}


//TYPES

export type EmailRegisterData = {
    success: boolean;
    message: string;
    user: {
        token: null;
        user: {
            id: string;
            email: string;
            name: string;
            image: string | null | undefined;
            emailVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    } | {
        token: string;
        user: {
            id: string;
            email: string;
            name: string;
            image: string | null | undefined;
            emailVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    };
}