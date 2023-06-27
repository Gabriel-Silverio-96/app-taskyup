import api from "shared/services/api";
import { IFetchPostSignInResponse, TypeFetchPostSignInService } from "../types";

const fetchPostSignInService = async (payload: TypeFetchPostSignInService) => {
	const response = await api.post<IFetchPostSignInResponse>("auth/login", payload);    
	return response;
};

export { fetchPostSignInService };