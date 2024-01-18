import { UseMutateFunction } from "@tanstack/react-query";
import { IFetchPostCreateNoteResponse } from "modules/notes/Note/components/HeaderNote/services/types";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IHeaderNote {
	count: number | undefined;
	title: string | undefined;
}

export interface IHeaderNoteView {
	title: string | undefined;
	handleClickViewMode: FunctionReturnsVoid;
	mutate: UseMutateFunction<
		IFetchPostCreateNoteResponse,
		unknown,
		void,
		unknown
	>;
	openDialogDeleteAllNotes: FunctionReturnsVoid;
	isDisabledDeleteAllNotes: boolean;
	isLoading: boolean;
}
