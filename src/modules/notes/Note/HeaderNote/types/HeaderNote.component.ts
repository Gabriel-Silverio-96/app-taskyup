import { IFetchSingleBoard } from "shared/common/types/Fetch";

export interface IHeaderNoteView {
    totalOfNotes: number;
    openDialogNewNote: () => void;
    openDialogDeleteAllNotesAndCloseMenu: () => void;
    isMediumScreen: boolean;
    data: IFetchSingleBoard | undefined;
    isFetching: boolean;
}