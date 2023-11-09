import { IFetchPostResetPasswordService } from "modules/auth/ResetPassword/services/types";
import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";

export const fetchPostResetPasswordService = async ({
	body,
	token,
}: IFetchPostResetPasswordService) => {
	return await api.post<IFetchResponseDefault>(
		`auth/reset-password/token=${token}`,
		body
	);
};
