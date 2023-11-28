import { IFetchGetNotesResponse } from "modules/notes/Note/services/types";

export interface ICardNotes {
	data: IFetchGetNotesResponse | undefined;
	isFetching?: boolean;
}
