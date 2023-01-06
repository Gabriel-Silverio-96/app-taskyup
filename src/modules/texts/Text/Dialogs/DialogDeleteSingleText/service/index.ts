import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";

const fetchDeleteSingleText = async (textID: string) => {
	const { data } = await api.delete<IFetchResponseDefault>(`/text/delete-this/text_id=${textID}`);
	return data;
};

export { fetchDeleteSingleText };