import { IFetchPatchTextService } from "modules/texts/TextEdit/components/Markdown/types";
import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";

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

export { fetchPatchTextService };
