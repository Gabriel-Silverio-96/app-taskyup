import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { IForgotPasswordForm } from "../types";

const fetchForgotPassword = async (form: IForgotPasswordForm) => {
	const response = await api.post<IFetchResponseDefault>("auth/forgot-password", form);			

	return response;
};

export default fetchForgotPassword;