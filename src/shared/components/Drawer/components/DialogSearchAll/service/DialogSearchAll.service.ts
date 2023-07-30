import api from "shared/services/api";
import { IFetchGetSearchAllResponse, IFetchGetSearchAllService } from "../types/DialogSearchAll.types";

const fetchGetSearchAllService = async (payload: IFetchGetSearchAllService) => {
	const { query, pageSize = 10, pageNumber = 0 } = payload;
	const config = { params: { query, pageSize, pageNumber } };
    
	const { data } = await api.get<IFetchGetSearchAllResponse>("search/all", config);

	return data;
};

export { fetchGetSearchAllService };