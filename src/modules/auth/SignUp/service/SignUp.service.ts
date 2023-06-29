import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { TypeFetchPostSignUpService } from "../types";

const fetchPostSignUpService = async (payload: TypeFetchPostSignUpService) => {
	const response = await api.post<IFetchResponseDefault>("auth/create-account", payload);
	return response;
};

export { fetchPostSignUpService };