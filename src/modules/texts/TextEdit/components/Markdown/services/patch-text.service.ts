import type { IFetchDefaultResponse } from "shared/common/types";
import api from "shared/services/api";
import type { IPatchTextService } from "modules/texts/TextEdit/components/Markdown/services/types";

export const patchTextService: IPatchTextService = async ({ params, data }) => {
	const { data: response } = await api.patch<IFetchDefaultResponse>(
		"/text/edit",
		{ ...data },
		{ params }
	);
	return response;
};
