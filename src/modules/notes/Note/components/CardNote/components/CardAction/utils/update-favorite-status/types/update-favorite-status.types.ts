import { IFetchGetNotesResponse } from "modules/notes/Note/services/types";

interface Params {
	data: IFetchGetNotesResponse | undefined;
	note_id: string;
	favorite_id: string;
}

export interface IUpdateFavoriteStatus<T = any> {
	({ data, note_id, favorite_id }: Params): T;
}
