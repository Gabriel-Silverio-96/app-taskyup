/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { IFetchGetProfile, IProfileForm } from "../types";

const fetchGetProfile = async () => {
	const { data } = await api.get<IFetchGetProfile>("auth/account");
	return data;
};

const fetchPutProfile = async (payload: IProfileForm) => {
	const { full_name } = payload;
	const response = await api.put<IFetchResponseDefault>("auth/account", { full_name });
	return response;
};

export { fetchGetProfile, fetchPutProfile };