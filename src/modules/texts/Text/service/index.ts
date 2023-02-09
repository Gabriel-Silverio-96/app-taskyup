import api from "shared/services/api";
import { IFetchCreateText, IFetchTextBody } from "../types";

const fetchCreateText = async (board_id: string | undefined, body: IFetchTextBody) => {
	const response = await api.post<IFetchCreateText>(`/text/board_id=${board_id}`, body);
	return response;
};


export default fetchCreateText;
