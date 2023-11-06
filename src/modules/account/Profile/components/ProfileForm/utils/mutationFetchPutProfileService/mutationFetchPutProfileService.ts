import { fetchPutProfileService } from "modules/account/Profile/services";
import { IProfileBody } from "modules/account/Profile/components/ProfileForm/types";

export const mutationFetchPutProfileService = ({ full_name }: IProfileBody) => {
	return fetchPutProfileService({ body: { full_name } });
};
