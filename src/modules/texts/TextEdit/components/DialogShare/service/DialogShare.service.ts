import api from "shared/services/api";
import {
	IFetchGetTextPermissionsResponse,
	IFetchGetTextPermissionsService,
} from "./types/fetchGetTextPermissions.types";
import { IFetchResponseDefault } from "shared/common/types/Fetch";
import { IFetchPatchTextPermissionsService } from "./types/fetchPatchTextPermissions.types";

export const fetchGetTextPermissions = async ({
	params,
}: IFetchGetTextPermissionsService) => {
	const { data } = await api.get<IFetchGetTextPermissionsResponse>(
		"/text/permissions",
		{ params }
	);
	return data;
};

export const fetchPatchTextPermissions = async (
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
