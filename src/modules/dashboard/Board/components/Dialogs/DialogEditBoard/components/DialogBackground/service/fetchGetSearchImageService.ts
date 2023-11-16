import { IFetchGetSearchImageService } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/components/DialogBackground/service/types";
import { IFetchSearchImages } from "shared/common/types/Fetch";
import api from "shared/services/api";

export const fetchGetSearchImageService: IFetchGetSearchImageService = async ({
	params,
}) => {
	return await api.get<IFetchSearchImages>("images/search", {
		params,
	});
};
