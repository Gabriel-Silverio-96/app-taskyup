import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";

const fetchDeleteOneBoardService = async (boardID: string | undefined) => {
	await api.delete<IFetchResponseDefault>(`board/delete/board_id=${boardID}`);
};

export { fetchDeleteOneBoardService };