import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { IFetchEditText, IFetchText, TFetchParams } from "./types";

const fetchText = async (text_id: TFetchParams) => {
	const { data } = await api.get<IFetchText>(`/text/text_id=${text_id}`);
	return data;
};

const fetchEditText = async ({ board_id, text_id, data }: IFetchEditText) => {
	const params = { params: { board_id, text_id } };
	const { data: res } = await api.post<IFetchResponseDefault>("/text/edit", { data }, params);
	return res;
};

export { fetchText, fetchEditText };
