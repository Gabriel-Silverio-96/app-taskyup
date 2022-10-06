import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface IFormResetPassword {
    password: string;
}

export interface IResetPasswordView {
    register: UseFormRegister<IFormResetPassword>;
    onSubmit: () => void;
    errors: FieldErrors<IFormResetPassword>;
    isSaving: boolean;
    resetPasswordSuccess: boolean;
}