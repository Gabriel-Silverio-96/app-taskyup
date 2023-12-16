import api from "shared/services/api";
import {
	IFetchGetSearchAllService,
	IFetchGetSearchAllResponse,
} from "shared/components/Drawer/components/DialogSearchAll/services/types";

export const fetchGetSearchAllService: IFetchGetSearchAllService = async ({
	params,
}) => {
	const { data } = await api.get<IFetchGetSearchAllResponse>("search/all", {
		params,
	});

	return data;
};
