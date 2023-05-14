import { IFetchGetSingleBoard } from "shared/common/types/Fetch";

export interface IHeaderNoteView {
    openDialogNewNote: () => void;
    openDialogDeleteAllNotes: () => void;
    isMediumScreen: boolean;
    data: IFetchGetSingleBoard | undefined;
    isFetching: boolean;
    countNotes: number;
}