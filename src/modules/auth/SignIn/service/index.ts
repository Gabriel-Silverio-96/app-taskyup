import api from "shared/services/api";
import { IFetchSignInResponse, ISignInForm } from "../types/SignIn.component";

const fetchSignIn = async (form: ISignInForm) => {
	const response = await api.post<IFetchSignInResponse>("auth/login", form);    
	return response;
};

export default fetchSignIn;