import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";

const fetchDeleteOneTextService = async (text_id: string) => {
	const { data } = await api.delete<IFetchResponseDefault>(`/text/delete-this/text_id=${text_id}`);
	return data;
};

export { fetchDeleteOneTextService };