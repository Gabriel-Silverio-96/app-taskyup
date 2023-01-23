import api from "shared/services/api";

const fetchSingleBoard = async (boardID: string | undefined) => {
	const { data } = await api.get(`/board/board_id=${boardID}`);
	return data;
};

export default fetchSingleBoard;