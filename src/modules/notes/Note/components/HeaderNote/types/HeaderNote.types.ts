import { IFetchGetOneBoardResponse } from "shared/common/hook/useFetchGetOneBoard/types";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IHeaderNoteView {
	data: IFetchGetOneBoardResponse | undefined;
	handleClickCreateNote: FunctionReturnsVoid;
	openDialogDeleteAllNotes: FunctionReturnsVoid;
	isMediumScreen: boolean;
	countNotes: number;
	isLoading: boolean;
	isFetching: boolean;
}
