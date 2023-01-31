import { IFetchResponseDefault, IFetchSingleBoard } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { IDialogEditBoardForm } from "../types/DialogEditBoard.component";

const fetchSingleBoard = async (boardID: string) => {
	const { data } = await api.get<IFetchSingleBoard>(`/board/board_id=${boardID}`);
	return data;
};

const fetchEditBoard = async (dataEdited: IDialogEditBoardForm, boardID: string, background_image: string) => {
	const data = { ...dataEdited, background_image };
	await api.patch<IFetchResponseDefault>(`board/edit/board_id=${boardID}`, data);
};

export { fetchSingleBoard, fetchEditBoard };