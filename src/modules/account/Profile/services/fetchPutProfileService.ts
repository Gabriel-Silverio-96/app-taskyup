import api from "shared/services/api";
import { IFetchPutProfileService } from "modules/account/Profile/services/types/fetchPutProfileService.types";
import { IFetchDefaultResponse } from "shared/common/types";

export const fetchPutProfileService = async ({
	body,
}: IFetchPutProfileService) => {
	return await api.put<IFetchDefaultResponse>("auth/account", body);
};
