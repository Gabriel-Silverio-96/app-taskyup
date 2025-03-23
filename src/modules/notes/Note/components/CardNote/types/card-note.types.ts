import { IGetNotesResponse } from "modules/notes/Note/services/types";

export interface ICardNotes {
	data: IGetNotesResponse | undefined;
	isFetching?: boolean;
}
