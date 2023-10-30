import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

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
	onSubmit: FunctionReturnsVoid;
}
