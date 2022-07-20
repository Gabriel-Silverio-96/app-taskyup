import { FieldErrors, UseFormReturn } from "react-hook-form";
import { ISignInForm } from "../shared/schema/types/types.schema";

export interface ISignInView extends Omit<UseFormReturn<ISignInForm>, UnwantedKeys>{
    showPassword: boolean;
    handleShowPassword: () => void;    
    errors: FieldErrors<ISignInForm>;    
}

type UnwantedKeys = "watch" |
"getValues" |
"getFieldState" |
"setError" |
"clearErrors" |
"setValue" |
"trigger" |
"formState" |
"resetField" |
"reset" |
"unregister" |
"control" |
"setFocus" 