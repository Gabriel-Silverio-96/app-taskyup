import type { IFetchPostSignUpService } from "modules/auth/SignUp/services/types";
import type { IFetchDefaultResponse } from "shared/common/types";
import api from "shared/services/api";

export const postSignUpService = async ({ body }: IFetchPostSignUpService) => {
	return await api.post<IFetchDefaultResponse>("auth/create-account", body);
};
