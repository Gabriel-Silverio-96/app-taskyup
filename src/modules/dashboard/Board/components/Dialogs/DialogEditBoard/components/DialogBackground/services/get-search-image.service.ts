import type {
	IGetSearchImageService,
	IGetSearchImagesResponse,
} from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/components/DialogBackground/services/types";
import api from "shared/services/api";

export const getSearchImageService: IGetSearchImageService = async ({
	params,
}) => {
	return await api.get<IGetSearchImagesResponse>("images/search", {
		params,
	});
};
