import { IFetchGetOneBoard } from "shared/common/types/Fetch";

export interface IHeaderNoteView {
    data: IFetchGetOneBoard | undefined;
    openDialogNewNote: () => void;
    openDialogDeleteAllNotes: () => void;
    isMediumScreen: boolean;
    countNotes: number;
}