import api from "shared/services/api";
import {
	IFetchGetTextPermissionsResponse,
	IFetchGetTextPermissionsService,
} from "modules/texts/TextEdit/components/DialogShare/service/types";

export const fetchGetTextPermissionsService: IFetchGetTextPermissionsService =
	async ({ params }) => {
		const { data } = await api.get<IFetchGetTextPermissionsResponse>(
			"/text/permissions",
			{ params }
		);
		return data;
	};
