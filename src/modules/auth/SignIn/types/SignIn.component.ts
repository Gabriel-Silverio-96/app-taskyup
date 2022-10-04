import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { IFetchResponseDefault } from "shared/common/types/Fetch";

export interface ISignInForm {
    email: string;
    password: string;
}

export interface ISignInView {
    register: UseFormRegister<ISignInForm>;
    handleSubmit: UseFormHandleSubmit<ISignInForm>;
    errors: FieldErrors<ISignInForm>;
    fetchSignIn: (dataUser: ISignInForm) => void;
    isLoading: boolean;
}

export interface IFetchSignInResponse extends IFetchResponseDefault {
    token: string;
    user_data: {
        full_name: string;
    }
}