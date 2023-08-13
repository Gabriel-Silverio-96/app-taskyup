import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import {
	IFetchGetOneTextService,
	IFetchGetOneTextResponse,
	IFetchPatchTextService,
} from "./types";

const fetchGetOneTextService: IFetchGetOneTextService = async text_id => {
	const { data } = await api.get<IFetchGetOneTextResponse>(
		`/text/text_id=${text_id}`
	);
	return data;
};

const fetchPatchTextService: IFetchPatchTextService = async ({
	board_id,
	text_id,
	data,
}) => {
	const params = { params: { board_id, text_id } };
	const { data: response } = await api.patch<IFetchResponseDefault>(
		"/text/edit",
		{ ...data },
		params
	);
	return response;
};

export { fetchGetOneTextService, fetchPatchTextService };
