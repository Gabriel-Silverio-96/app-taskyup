import { IFetchGetSearchImages } from "shared/common/types/Fetch";
import api from "shared/services/api";

const fetchGetSearchImage = async (queryImage: string, page: number) => {
	const params = { params: { query: queryImage, page } };
	const response = await api.get<IFetchGetSearchImages>("images/search", params);
    
	return response;
};

export default fetchGetSearchImage;