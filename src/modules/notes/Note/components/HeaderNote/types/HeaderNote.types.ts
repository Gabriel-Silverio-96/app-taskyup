import { IFetchGetOneBoardResponse } from "shared/common/hook/useFetchGetOneBoard/types";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";
import { IFetchResponseDefault } from "shared/common/types/Fetch";

export interface IHeaderNoteView {
	data: IFetchGetOneBoardResponse | undefined;
	handleClickCreateNote: FunctionReturnsVoid;
	openDialogDeleteAllNotes: FunctionReturnsVoid;
	isMediumScreen: boolean;
	countNotes: number;
	isLoading: boolean;
}

export interface IFetchPostCreateNoteResponse extends IFetchResponseDefault {
	results: {
		note_id: string;
	};
}

export interface IFetchPostCreateNoteService {
	board_id: string | undefined;
	payload: {
		color_note: string;
		title_note: string;
		observation: string;
	};
}
