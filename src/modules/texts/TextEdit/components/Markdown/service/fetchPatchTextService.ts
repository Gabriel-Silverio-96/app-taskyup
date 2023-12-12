import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { IFetchPatchTextService } from "modules/texts/TextEdit/components/Markdown/service/types";

export const fetchPatchTextService: IFetchPatchTextService = async ({
	params,
	data,
}) => {
	const { data: response } = await api.patch<IFetchResponseDefault>(
		"/text/edit",
		{ ...data },
		{ params }
	);
	return response;
};
