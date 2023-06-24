import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { IFetchGetProfileResponse, TFetchPutProfile } from "../types";

const fetchGetProfile = async () => {
	const { data } = await api.get<IFetchGetProfileResponse>("auth/account");
	return data;
};

const fetchPutProfile = async (payload: TFetchPutProfile) => {
	const { full_name } = payload;
	const response = await api.put<IFetchResponseDefault>("auth/account", { full_name });
	return response;
};

export { fetchGetProfile, fetchPutProfile };