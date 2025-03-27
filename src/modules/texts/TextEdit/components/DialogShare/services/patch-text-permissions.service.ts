import { IFetchDefaultResponse } from "shared/common/types";
import api from "shared/services/api";
import { IPatchTextPermissionsService } from "modules/texts/TextEdit/components/DialogShare/services/types";

export const patchTextPermissionsService: IPatchTextPermissionsService =
	async ({ body, params }) => {
		return await api.patch<IFetchDefaultResponse>(
			"/text/edit/permissions",
			body,
			{ params }
		);
	};
