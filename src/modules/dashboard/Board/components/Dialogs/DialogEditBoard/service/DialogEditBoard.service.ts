import {
	IFetchResponseDefault,
	IFetchGetOneBoardResponse,
} from "shared/common/types/Fetch";
import api from "shared/services/api";
import { IFetchPatchBoardService } from "../types";

const fetchGetOneBoardService = async (boardID: string) => {
	const { data } = await api.get<IFetchGetOneBoardResponse>(
		`/board/board_id=${boardID}`
	);
	return data;
};

const fetchPatchBoardService = async (payload: IFetchPatchBoardService) => {
	const { form, background_image, boardID } = payload;
	const data = { ...form, background_image };

	await api.patch<IFetchResponseDefault>(
		`board/edit/board_id=${boardID}`,
		data
	);
};

export { fetchGetOneBoardService, fetchPatchBoardService };
