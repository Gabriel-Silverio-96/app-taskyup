import api from "shared/services/api";
import {
	IFetchGetPublicTextResponse,
	IFetchGetPublicTextService,
} from "./types/fetchGetPublicTextService.types";

export const fetchGetPublicTextService = async ({
	params,
}: IFetchGetPublicTextService) => {
	const { data } = await api.get<IFetchGetPublicTextResponse>("public/text", {
		params,
	});
	return data;
};
