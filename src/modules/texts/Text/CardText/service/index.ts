import api from "shared/services/api";
import { IFetchGetAllTextResponse } from "../types/CardText.component";

const fetchGetAllTextService = async (board_id: string | undefined) => {
	const { data } = await api.get<IFetchGetAllTextResponse>(`/text/list/board_id=${board_id}`);
	return data;
};

export default fetchGetAllTextService;