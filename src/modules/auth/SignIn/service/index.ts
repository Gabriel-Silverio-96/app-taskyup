import api from "shared/services/api";
import { IFetchSignInResponse, ISignInForm } from "../types/SignIn.component";

const fetchPostSignIn = async (form: ISignInForm) => {
	const response = await api.post<IFetchSignInResponse>("auth/login", form);    
	return response;
};

export default fetchPostSignIn;