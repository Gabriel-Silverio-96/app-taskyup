import type {
	IPostSignInResponse,
	IPostSignInService,
} from "modules/auth/SignIn/service/types";
import api from "shared/services/api";

export const postSignInService = async ({ body }: IPostSignInService) => {
	return await api.post<IPostSignInResponse>("auth/login", body);
};
