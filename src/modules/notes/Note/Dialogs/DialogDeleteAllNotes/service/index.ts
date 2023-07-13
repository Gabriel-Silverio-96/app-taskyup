import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";

const fetchDeleteAllNotesService = async (boardID: string | undefined) => {
	await api.delete<IFetchResponseDefault>(`notes/delete-all/board_id=${boardID}`);
};

export default fetchDeleteAllNotesService;