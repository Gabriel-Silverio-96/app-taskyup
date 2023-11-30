import { UseMutateFunction } from "@tanstack/react-query";
import { IFetchGetOneBoardResponse } from "shared/common/hook/useFetchGetOneBoard/types";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";
import { IFetchPostCreateNoteResponse } from "modules/notes/Note/components/HeaderNote/services/types";

export interface IHeaderNote {
	count: number | undefined;
}

export interface IHeaderNoteView {
	data: IFetchGetOneBoardResponse | undefined;
	mutate: UseMutateFunction<
		IFetchPostCreateNoteResponse,
		unknown,
		void,
		unknown
	>;
	openDialogDeleteAllNotes: FunctionReturnsVoid;
	isMediumScreen: boolean;
	isDisabledDeleteAllNotes: boolean;
	isLoading: boolean;
	isFetching: boolean;
}
