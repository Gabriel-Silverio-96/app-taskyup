import { IFetchDefaultResponse } from "shared/common/types";
import api from "shared/services/api";
import { IFetchPostForgotPasswordService } from "modules/auth/ForgotPassword/services/types";

export const fetchPostForgotPasswordService = async ({
	body,
}: IFetchPostForgotPasswordService) => {
	return await api.post<IFetchDefaultResponse>("auth/forgot-password", {
		...body,
	});
};
