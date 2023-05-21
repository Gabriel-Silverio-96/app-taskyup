import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { IFetchResetPassword } from "../types";

const fetchResetPassword = async ({ form, token }: IFetchResetPassword) => {	
	const response = await api.post<IFetchResponseDefault>(`auth/reset-password/token=${token}`, form);

	return response;
};

export default fetchResetPassword;