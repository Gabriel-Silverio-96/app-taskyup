import type { IPostResetPasswordService } from "modules/auth/ResetPassword/services/types";
import type { IFetchDefaultResponse } from "shared/common/types";
import api from "shared/services/api";

export const postResetPasswordService = async ({
	body,
	token,
}: IPostResetPasswordService) => {
	return await api.post<IFetchDefaultResponse>(
		`auth/reset-password/token=${token}`,
		body
	);
};
