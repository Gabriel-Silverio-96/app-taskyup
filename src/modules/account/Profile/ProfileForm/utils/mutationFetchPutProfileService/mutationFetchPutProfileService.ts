import { fetchPutProfileService } from "modules/account/Profile/services";
import { IProfileBody } from "modules/account/Profile/ProfileForm/types";

export const mutationFetchPutProfileService = ({ full_name }: IProfileBody) => {
	return fetchPutProfileService({ body: { full_name } });
};
