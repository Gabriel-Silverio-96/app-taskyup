import { IFetchGetOneBoardResponse } from "shared/common/hook/useFetchGetOneBoard/types";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IHeaderNote {
	count: number | undefined;
}

export interface IHeaderNoteView {
	data: IFetchGetOneBoardResponse | undefined;
	handleClickCreateNote: FunctionReturnsVoid;
	openDialogDeleteAllNotes: FunctionReturnsVoid;
	isMediumScreen: boolean;
	isDisabledDeleteAllNotes: boolean;
	isLoading: boolean;
	isFetching: boolean;
}
