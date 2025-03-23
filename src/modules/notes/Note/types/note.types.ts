import { IGetNotesResponse } from "modules/notes/Note/services/types";

export interface INoteView {
	data: IGetNotesResponse | undefined;
	isFetching: boolean;
	isShowDoodleMessage: boolean;
}
