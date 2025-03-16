import { FieldErrors, UseFormRegister } from "react-hook-form";
import type { FunctionReturnsVoid } from "shared/common/types";

export interface IResetPasswordForm {
	password: string;
}

export interface IResetPasswordView {
	register: UseFormRegister<IResetPasswordForm>;
	onSubmit: FunctionReturnsVoid;
	errors: FieldErrors<IResetPasswordForm>;
	isSaving: boolean;
	isResetPasswordSuccess: boolean;
}
