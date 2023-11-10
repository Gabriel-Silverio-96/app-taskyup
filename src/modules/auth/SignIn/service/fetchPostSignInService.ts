import {
	IFetchPostSignInResponse,
	IFetchPostSignInService,
} from "modules/auth/SignIn/service/types";
import api from "shared/services/api";

export const fetchPostSignInService = async ({
	body,
}: IFetchPostSignInService) => {
	return await api.post<IFetchPostSignInResponse>("auth/login", body);
};
