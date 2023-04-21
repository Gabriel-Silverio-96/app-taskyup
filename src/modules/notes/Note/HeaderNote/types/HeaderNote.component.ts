import { IFetchSingleBoard } from "shared/common/types/Fetch";

export interface IHeaderNoteView {
    openDialogNewNote: () => void;
    openDialogDeleteAllNotes: () => void;
    isMediumScreen: boolean;
    data: IFetchSingleBoard | undefined;
    isFetching: boolean;
    isDisabledDeleteAllNotesButton: boolean;
}