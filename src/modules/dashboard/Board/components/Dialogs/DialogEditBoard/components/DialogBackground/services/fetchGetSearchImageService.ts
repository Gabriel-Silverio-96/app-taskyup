import {
	IFetchGetSearchImageService,
	IFetchSearchImagesResponse,
} from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/components/DialogBackground/services/types";
import api from "shared/services/api";

export const fetchGetSearchImageService: IFetchGetSearchImageService = async ({
	params,
}) => {
	return await api.get<IFetchSearchImagesResponse>("images/search", {
		params,
	});
};
