import { IFetchPostResetPasswordService } from "modules/auth/ResetPassword/services/types";
import { IFetchDefaultResponse } from "shared/common/types";
import api from "shared/services/api";

export const fetchPostResetPasswordService = async ({
	body,
	token,
}: IFetchPostResetPasswordService) => {
	return await api.post<IFetchDefaultResponse>(
		`auth/reset-password/token=${token}`,
		body
	);
};
