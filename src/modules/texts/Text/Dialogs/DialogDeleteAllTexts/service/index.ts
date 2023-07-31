import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";

const fetchDeleteAllTextsService = async (boardID: string | undefined) => {
	const { data } = await api.delete<IFetchResponseDefault>(`/text/delete-all/board_id=${boardID}`);
	return data;
};

export { fetchDeleteAllTextsService };