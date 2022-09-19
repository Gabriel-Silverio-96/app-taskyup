import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface IForgotPasswordForm {
	email: string;
}

export interface IEmailSend {
	email: string;
	isSendEmail: boolean;
}

export interface IForgotPasswordView {
	register: UseFormRegister<IForgotPasswordForm>;
	errors: FieldErrors<IForgotPasswordForm>;
	isLoading: boolean;
	emailSend: IEmailSend;
	onSubmit: () => void;
}
