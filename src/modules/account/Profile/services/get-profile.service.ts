import api from "shared/services/api";
import type { IGetProfileResponse } from "modules/account/Profile/services/types";

export const getProfileService = async () => {
	const { data } = await api.get<IGetProfileResponse>("auth/account");
	return data;
};
