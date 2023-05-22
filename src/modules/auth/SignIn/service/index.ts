import api from "shared/services/api";
import { IFetchPostSignInResponse, ISignInForm } from "../types/SignIn.component";

const fetchPostSignIn = async (form: ISignInForm) => {
	const response = await api.post<IFetchPostSignInResponse>("auth/login", form);    
	return response;
};

export default fetchPostSignIn;