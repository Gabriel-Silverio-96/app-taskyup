import { IFetchResponseDefault } from "shared/common/types";
import api from "shared/services/api";
import { IFetchPostSignUpService } from "modules/auth/SignUp/services/types";

export const fetchPostSignUpService = async ({
	body,
}: IFetchPostSignUpService) => {
	return await api.post<IFetchResponseDefault>("auth/create-account", body);
};
