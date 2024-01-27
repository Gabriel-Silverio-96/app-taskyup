import { IFetchDefaultResponse } from "shared/common/types";
import api from "shared/services/api";
import { TypeFetchPostSignUpService } from "../types";

const fetchPostSignUpService = async (payload: TypeFetchPostSignUpService) => {
	const response = await api.post<IFetchDefaultResponse>(
		"auth/create-account",
		payload
	);
	return response;
};

export { fetchPostSignUpService };
