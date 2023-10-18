import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import {
	IFetchGetTextPermissionsResponse,
	IFetchGetTextPermissionsService,
	IFetchPatchTextPermissionsService,
} from "./types";

export const fetchGetTextPermissionsService = async ({
	params,
}: IFetchGetTextPermissionsService) => {
	const { data } = await api.get<IFetchGetTextPermissionsResponse>(
		"/text/permissions",
		{ params }
	);
	return data;
};

export const fetchPatchTextPermissionsService = async (
	data: IFetchPatchTextPermissionsService
) => {
	const { payload, board_id, text_id } = data;
	const config = { params: { board_id, text_id } };

	return await api.patch<IFetchResponseDefault>(
		"/text/edit/permissions",
		payload,
		config
	);
};
