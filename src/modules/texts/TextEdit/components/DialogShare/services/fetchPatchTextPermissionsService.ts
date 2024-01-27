import { IFetchDefaultResponse } from "shared/common/types";
import api from "shared/services/api";
import { IFetchPatchTextPermissionsService } from "modules/texts/TextEdit/components/DialogShare/services/types";

export const fetchPatchTextPermissionsService: IFetchPatchTextPermissionsService =
	async ({ body, params }) => {
		return await api.patch<IFetchDefaultResponse>(
			"/text/edit/permissions",
			body,
			{ params }
		);
	};
