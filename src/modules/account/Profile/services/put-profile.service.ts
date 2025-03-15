import api from "shared/services/api";
import { IPutProfileService } from "modules/account/Profile/services/types";
import { IFetchDefaultResponse } from "shared/common/types";

export const putProfileService = async ({ body }: IPutProfileService) => {
	return await api.put<IFetchDefaultResponse>("auth/account", body);
};
