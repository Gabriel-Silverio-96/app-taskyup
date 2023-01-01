import api from "shared/services/api";

const fetchTexts = async (board_id: string | undefined) => {
	const { data } = await api.get<any>(`/text/list/board_id=${board_id}`);
	return data;
};

export { fetchTexts };