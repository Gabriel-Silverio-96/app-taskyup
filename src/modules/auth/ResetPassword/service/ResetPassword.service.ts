import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { IFetchPostResetPassword } from "../types";

const fetchPostResetPassword = async (payload: IFetchPostResetPassword) => {
	const { form, token } = payload;
	const response = await api.post<IFetchResponseDefault>(`auth/reset-password/token=${token}`, form);

	return response;
};

export { fetchPostResetPassword };