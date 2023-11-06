import api from "shared/services/api";
import { IFetchPutProfileService } from "modules/account/Profile/services/types/fetchPutProfileService.types";
import { IFetchResponseDefault } from "shared/common/types/Fetch";

export const fetchPutProfileService = async ({
	body,
}: IFetchPutProfileService) => {
	return await api.put<IFetchResponseDefault>("auth/account", {
		...body,
	});
};
