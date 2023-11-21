import api from "shared/services/api";
import {
	IFetchGetPublicTextResponse,
	IFetchGetPublicTextService,
} from "./types/fetchGetPublicTextService.types";

export const fetchGetPublicTextService: IFetchGetPublicTextService = async ({
	params,
}) => {
	const { data } = await api.get<IFetchGetPublicTextResponse>("public/text", {
		params,
	});
	return data;
};
