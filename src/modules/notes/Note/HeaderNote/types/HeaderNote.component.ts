import { IFetchGetNotes } from "../../types/Note.component";

export interface IHeaderNote {
    data: IFetchGetNotes | undefined;
}

export interface IHeaderNoteView  extends IHeaderNote {
    openDialogNewNote: () => void;
    openDialogDeleteAllNotesAndCloseMenu: () => void;
    isMediumScreen: boolean;
    isDisabledIconButtonTrash: boolean | undefined;
}