import type { IForgotPasswordForm } from "modules/auth/ForgotPassword/types";

export interface IPostForgotPasswordService {
	body: IForgotPasswordForm;
}
