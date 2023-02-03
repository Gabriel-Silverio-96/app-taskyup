import api from "shared/services/api";
import { IFetchResetPassword } from "../types";

const fetchResetPassword = async (payload: IFetchResetPassword) => {
	const { form, token } = payload;
	const response = await api.post(`auth/reset-password/token=${token}`, form);

	return response;
};

export default fetchResetPassword;