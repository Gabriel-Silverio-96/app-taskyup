import api from "shared/services/api";
import { IFetchGetOneBoardResponse } from "shared/common/hook/useFetchGetOneBoard/types";

export const fetchGetOneBoardService = async (boardID: string | undefined) => {
	const { data } = await api.get<IFetchGetOneBoardResponse>(
		`/board/board_id=${boardID}`
	);
	return data;
};
