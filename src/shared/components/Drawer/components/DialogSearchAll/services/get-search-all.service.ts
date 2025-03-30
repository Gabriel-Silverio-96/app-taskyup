import api from "shared/services/api";
import {
	IGetSearchAllService,
	IGetSearchAllResponse,
} from "shared/components/Drawer/components/DialogSearchAll/services/types";

export const getSearchAllService: IGetSearchAllService = async ({ params }) => {
	const { data } = await api.get<IGetSearchAllResponse>("search/all", {
		params,
	});

	return data;
};
