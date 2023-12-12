import api from "shared/services/api";
import {
	IFetchGetOneTextService,
	IFetchGetOneTextResponse,
} from "modules/texts/TextEdit/components/Markdown/services/types";

export const fetchGetOneTextService: IFetchGetOneTextService =
	async text_id => {
		const { data } = await api.get<IFetchGetOneTextResponse>(
			`/text/text_id=${text_id}`
		);
		return data;
	};
