import api from "shared/services/api";
import type {
	IGetPublicTextResponse,
	IGetPublicTextService,
} from "modules/texts/PublicText/services/types";

export const getPublicTextService: IGetPublicTextService = async ({
	params,
}) => {
	const { data } = await api.get<IGetPublicTextResponse>("public/text", {
		params,
	});
	return data;
};
