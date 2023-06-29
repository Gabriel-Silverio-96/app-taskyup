import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { ISignUpForm } from "../types/SignUp.component";

const fetchPostSignUp = async (form: ISignUpForm) => {
	const response = await api.post<IFetchResponseDefault>("auth/create-account", form);
	return response;
};

export default fetchPostSignUp;