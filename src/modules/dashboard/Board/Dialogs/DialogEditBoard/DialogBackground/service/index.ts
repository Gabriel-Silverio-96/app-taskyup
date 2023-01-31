import { IFetchSearchImages } from "shared/common/types/Fetch";
import api from "shared/services/api";

const fetchSearchImage = async (queryImage: string, page: number) => {
	const params = { params: { query: queryImage, page } };
	const response = await api.get<IFetchSearchImages>("images/search", params);
    
	return response;
};

export default fetchSearchImage;