import { AxiosPromise } from "axios";
import { IFetchResponseDefault } from "shared/common/types/Fetch";

export interface IFetchPatchBoardService {
	(
		boardID: string | undefined,
		body: {
			title: string;
			background_image: string;
		}
	): AxiosPromise<IFetchResponseDefault>;
}
