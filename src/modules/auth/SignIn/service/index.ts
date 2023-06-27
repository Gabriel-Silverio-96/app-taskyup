import api from "shared/services/api";
import { IFetchSignInResponse, TypeFetchPostSignIn } from "../types/SignIn.component";

const fetchPostSignIn = async (payload: TypeFetchPostSignIn) => {
	const response = await api.post<IFetchSignInResponse>("auth/login", payload);    
	return response;
};

export default fetchPostSignIn;