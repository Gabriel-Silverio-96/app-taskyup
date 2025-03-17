import { IResetPasswordForm } from "modules/auth/ResetPassword/types";

export interface IPostResetPasswordService {
	body: IResetPasswordForm;
	token: string | undefined;
}
