import { FieldErrors, UseFormReturn } from "react-hook-form";
import { ISignInForm } from "../shared/schema/types/types.schema";

export interface ISignInView extends Omit<UseFormReturn<ISignInForm>, UnwantedKeys> {
    showPassword: boolean;
    handleShowPassword: () => void;
    errors: FieldErrors<ISignInForm>;
    fetchSignIn: (dataUser: IDataUser) => void;
    isLoading: boolean;
}

export interface IDataUser {
    email: string;
    password: string;
}

export interface IFetchSignInResponse {
    type_message: string;
    message: string;
    token: string;
    user_data: {
        full_name: string;
    }
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