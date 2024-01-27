import { AxiosPromise } from "axios";
import { INoteEditForm } from "modules/notes/NoteEdit/types";
import { IFetchDefaultResponse } from "shared/common/types";

export interface IFetchPutNoteProps {
	params: {
		note_id: string | null;
		board_id: string | null;
	};
	body: INoteEditForm;
}

export interface IFetchPutNoteService {
	({ params, body }: IFetchPutNoteProps): AxiosPromise<IFetchDefaultResponse>;
}
