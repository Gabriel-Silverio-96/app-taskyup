import { IFetchGetNotesResponse } from "../services/types";

export interface INoteView {
	data: IFetchGetNotesResponse | undefined;
	isFetching: boolean;
	isShowDoodleMessage: boolean;
}
