import api from "shared/services/api";
import type {
	IFetchGetOneTextService,
	IFetchGetOneTextResponse,
} from "modules/texts/TextEdit/components/Markdown/services/types";

export const fetchGetOneTextService: IFetchGetOneTextService = async textID => {
	const { data } = await api.get<IFetchGetOneTextResponse>(
		`/text/text_id=${textID}`
	);
	return data;
};
