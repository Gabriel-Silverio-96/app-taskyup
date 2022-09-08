import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface IForgotPasswordForm {
    email: string;
}

export interface IForgotPasswordView {
    register: UseFormRegister<IForgotPasswordForm>;
    errors: FieldErrors<IForgotPasswordForm>
    onSubmit: () => void;
}