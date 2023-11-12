import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { IFetchPostSignUpService } from "modules/auth/SignUp/service/types";

export const fetchPostSignUpService = async ({
	body,
}: IFetchPostSignUpService) => {
	return await api.post<IFetchResponseDefault>("auth/create-account", body);
};
