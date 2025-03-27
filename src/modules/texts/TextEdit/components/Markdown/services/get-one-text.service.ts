import api from "shared/services/api";
import type {
	IGetOneTextService,
	IGetOneTextResponse,
} from "modules/texts/TextEdit/components/Markdown/services/types";

export const getOneTextService: IGetOneTextService = async textID => {
	const { data } = await api.get<IGetOneTextResponse>(
		`/text/text_id=${textID}`
	);
	return data;
};
