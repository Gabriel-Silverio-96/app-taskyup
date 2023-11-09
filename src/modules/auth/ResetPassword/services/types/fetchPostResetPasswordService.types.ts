import { IResetPasswordForm } from "modules/auth/ResetPassword/types";

export interface IFetchPostResetPasswordService {
	body: IResetPasswordForm;
	token: string | undefined;
}
