import api from "shared/services/api";
import { IFetchCreateText, IFetchTexts } from "../types/CardText.component";

const fetchTexts = async (board_id: string | undefined) => {
	const { data } = await api.get<IFetchTexts>(`/text/list/board_id=${board_id}`);
	return data;
};

const fetchCreateText = async (board_id: string | undefined) => {
	const dateNow = Date.now();
	const title_text = `TaskYup text ${dateNow}`;	

	const { data } = await api.post<IFetchCreateText>(`/text/board_id=${board_id}`, { title_text, text: "" });
	return data;
};


export { fetchTexts, fetchCreateText };