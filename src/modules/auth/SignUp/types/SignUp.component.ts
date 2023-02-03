import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface ISignUpForm {
    full_name: string;
    email: string;
    password: string;
}

export interface ISignUpView {
    register: UseFormRegister<ISignUpForm>;
    handleSubmit: UseFormHandleSubmit<ISignUpForm>;
    errors: FieldErrors<ISignUpForm>;
    signUpSubmit: (form: ISignUpForm) => void;
    isLoading: boolean;
}