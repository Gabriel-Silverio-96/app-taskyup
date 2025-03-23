import { IGetNotesResponse } from "modules/notes/Note/services/types";

interface Params {
	data: IGetNotesResponse | undefined;
	note_id: string;
	favorite_id: string | undefined;
}

export interface IUpdateFavoriteStatus<T = any> {
	({ data, note_id, favorite_id }: Params): T;
}
