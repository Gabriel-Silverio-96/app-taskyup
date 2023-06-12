import { IFetchResponseDefault, IFetchGetOneBoard } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { IFetchPatchBoard } from "../types/DialogEditBoard.component";

const fetchGetOneBoard = async (boardID: string) => {
	const { data } = await api.get<IFetchGetOneBoard>(`/board/board_id=${boardID}`);
	return data;
};

const fetchPatchBoard = async (payload: IFetchPatchBoard) => {
	const { form, background_image, boardID } = payload;
	const data = { ...form, background_image };	
	
	await api.patch<IFetchResponseDefault>(`board/edit/board_id=${boardID}`, data);
};

export { fetchGetOneBoard, fetchPatchBoard };
