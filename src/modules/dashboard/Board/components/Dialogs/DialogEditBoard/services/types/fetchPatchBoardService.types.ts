import { AxiosPromise } from "axios";
import { IFetchResponseDefault } from "shared/common/types";

export interface IFetchPatchBoardService {
	(
		boardID: string | undefined,
		body: {
			title: string;
			background_image: string;
		}
	): AxiosPromise<IFetchResponseDefault>;
}
