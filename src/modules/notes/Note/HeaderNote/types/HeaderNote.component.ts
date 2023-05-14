import { IFetchGetSingleBoard } from "shared/common/types/Fetch";

export interface IHeaderNoteView {
    data: IFetchGetSingleBoard | undefined;
    openDialogNewNote: () => void;
    openDialogDeleteAllNotes: () => void;
    isMediumScreen: boolean;
    countNotes: number;
}