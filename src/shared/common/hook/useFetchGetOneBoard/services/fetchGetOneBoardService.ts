import { IFetchGetOneBoardResponse } from "shared/common/types/Fetch";
import api from "shared/services/api";

export const fetchGetOneBoardService = async (boardID: string | undefined) => {
	const { data } = await api.get<IFetchGetOneBoardResponse>(
		`/board/board_id=${boardID}`
	);
	return data;
};
