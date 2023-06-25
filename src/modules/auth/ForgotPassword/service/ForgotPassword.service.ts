import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { TFetchPostForgotPasswordService } from "../types";

const fetchPostForgotPasswordService = async (paylod: TFetchPostForgotPasswordService) => {
	const response = await api.post<IFetchResponseDefault>("auth/forgot-password", paylod);
	return response;
};

export { fetchPostForgotPasswordService };
