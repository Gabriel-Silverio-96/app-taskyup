import api from "shared/services/api";
import {
	IGetTextPermissionsResponse,
	IGetTextPermissionsService,
} from "modules/texts/TextEdit/components/DialogShare/services/types";

export const getTextPermissionsService: IGetTextPermissionsService = async ({
	params,
}) => {
	const { data } = await api.get<IGetTextPermissionsResponse>(
		"/text/permissions",
		{ params }
	);
	return data;
};
