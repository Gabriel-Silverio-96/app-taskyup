import api from "shared/services/api";
import { IFetchGetProfileResponse } from "modules/account/Profile/services/types/fetchGetProfileService.types";

export const fetchGetProfileService = async () => {
	const { data } = await api.get<IFetchGetProfileResponse>("auth/account");
	return data;
};
