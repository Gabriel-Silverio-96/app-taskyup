import type { IFetchDefaultResponse } from "shared/common/types";
import api from "shared/services/api";
import type { IPostForgotPasswordService } from "modules/auth/ForgotPassword/services/types";

export const postForgotPasswordService = async ({
	body,
}: IPostForgotPasswordService) => {
	return await api.post<IFetchDefaultResponse>("auth/forgot-password", {
		...body,
	});
};
