import { IFetchResponseDefault, IFetchSingleBoard } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { IFetchEditBoard } from "../types/DialogEditBoard.component";

const fetchSingleBoard = async (boardID: string) => {
	const { data } = await api.get<IFetchSingleBoard>(`/board/board_id=${boardID}`);
	return data;
};

const fetchEditBoard = async (payload: IFetchEditBoard) => {
	const { form, background_image, boardID } = payload;
	const data = { ...form, background_image };	
	
	await api.patch<IFetchResponseDefault>(`board/edit/board_id=${boardID}`, data);
};

export { fetchSingleBoard, fetchEditBoard };
