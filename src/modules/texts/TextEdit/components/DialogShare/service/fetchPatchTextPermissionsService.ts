import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { IFetchPatchTextPermissionsService } from "modules/texts/TextEdit/components/DialogShare/service/types";

export const fetchPatchTextPermissionsService: IFetchPatchTextPermissionsService =
	async ({ body, params }) => {
		return await api.patch<IFetchResponseDefault>(
			"/text/edit/permissions",
			body,
			{ params }
		);
	};
