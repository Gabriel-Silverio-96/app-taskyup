import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface IForgotPasswordForm {
	email: string;
}

export type TFetchPostForgotPasswordService = IForgotPasswordForm;

export interface ISendEmail {
	email: string;
	isSending: boolean;
}

export interface IForgotPasswordView {
	register: UseFormRegister<IForgotPasswordForm>;
	errors: FieldErrors<IForgotPasswordForm>;
	isLoading: boolean;
	sendEmail: ISendEmail;
	onSubmit: () => void;
}