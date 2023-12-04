import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";

export const fetchDeleteOneTextService = async (textID: string) => {
	const { data } = await api.delete<IFetchResponseDefault>(
		`/text/delete-this/text_id=${textID}`
	);
	return data;
};
