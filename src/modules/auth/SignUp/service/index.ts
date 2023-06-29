import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { ISignUpForm } from "../types/SignUp.component";

const fetchPostSignUpService = async (payload: ISignUpForm) => {
	const response = await api.post<IFetchResponseDefault>("auth/create-account", payload);
	return response;
};

export default fetchPostSignUpService;