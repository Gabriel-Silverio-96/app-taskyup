import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { IFetchEditText, IFetchText, TFetchParams } from "./types";

const fetchGetOneTextService = async (text_id: TFetchParams) => {
	const { data } = await api.get<IFetchText>(`/text/text_id=${text_id}`);
	return data;
};

const fetchPatchTextService = async ({
	board_id,
	text_id,
	data,
}: IFetchEditText) => {
	const params = { params: { board_id, text_id } };
	const { data: response } = await api.patch<IFetchResponseDefault>(
		"/text/edit",
		{ ...data },
		params
	);
	return response;
};

export { fetchGetOneTextService, fetchPatchTextService };
