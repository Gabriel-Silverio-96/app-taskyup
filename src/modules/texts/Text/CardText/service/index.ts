import api from "shared/services/api";
import { IFetchTexts } from "../types/CardText.component";

const fetchTexts = async (board_id: string | undefined) => {
	const { data } = await api.get<IFetchTexts>(`/text/list/board_id=${board_id}`);
	return data;
};

export { fetchTexts };