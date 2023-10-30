import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IFormResetPassword {
	password: string;
}

export interface IResetPasswordView {
	register: UseFormRegister<IFormResetPassword>;
	onSubmit: FunctionReturnsVoid;
	errors: FieldErrors<IFormResetPassword>;
	isSaving: boolean;
	resetPasswordSuccess: boolean;
}

export interface IFetchPostResetPassword {
	form: IFormResetPassword;
	token: string | undefined;
}
