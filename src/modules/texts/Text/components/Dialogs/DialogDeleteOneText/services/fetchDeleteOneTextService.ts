import { IFetchDefaultResponse } from "shared/common/types";
import api from "shared/services/api";

export const fetchDeleteOneTextService = async (textID: string) => {
	const { data } = await api.delete<IFetchDefaultResponse>(
		`/text/delete-this/text_id=${textID}`
	);
	return data;
};
