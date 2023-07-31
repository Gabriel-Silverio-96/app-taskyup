import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";

const fetchDeleteAllTextsService = async (board_id: string | undefined) => {
	const { data } = await api.delete<IFetchResponseDefault>(`/text/delete-all/board_id=${board_id}`);
	return data;
};

export { fetchDeleteAllTextsService };