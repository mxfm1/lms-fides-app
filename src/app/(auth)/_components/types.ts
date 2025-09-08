import { UseFormReturn } from "react-hook-form";
import { registerSchemaType } from "../register/page";

export type RegisterFormProps = {
    buttonLabel:string;
    placeholder?:string;
    submitLogic?: (data: registerSchemaType) => void
    form: UseFormReturn<registerSchemaType>
}