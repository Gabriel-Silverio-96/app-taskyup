import api from "shared/services/api";
import type { IPutProfileService } from "modules/account/Profile/services/types";
import type { IFetchDefaultResponse } from "shared/common/types";

export const putProfileService = async ({ body }: IPutProfileService) => {
	return await api.put<IFetchDefaultResponse>("auth/account", body);
};
