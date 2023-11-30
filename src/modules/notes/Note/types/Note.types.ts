import { IFetchGetNotesResponse } from "modules/notes/Note/services/types";

export interface INoteView {
	data: IFetchGetNotesResponse | undefined;
	isFetching: boolean;
	isShowDoodleMessage: boolean;
}
