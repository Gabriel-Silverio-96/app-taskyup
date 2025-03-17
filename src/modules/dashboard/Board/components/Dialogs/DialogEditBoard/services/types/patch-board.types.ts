import { AxiosPromise } from "axios";
import { IFetchDefaultResponse } from "shared/common/types";

export interface IPatchBoardService {
	(
		boardID: string | undefined,
		body: {
			title: string;
			background_image: string;
		}
	): AxiosPromise<IFetchDefaultResponse>;
}
