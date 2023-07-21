import { IFetchGetSingleBoard } from "shared/common/types/Fetch";

export interface IHeaderNoteView {
    data: IFetchGetSingleBoard | undefined;
    handleClickCreateNote: () => void;
    openDialogDeleteAllNotes: () => void;
    isMediumScreen: boolean;
    countNotes: number;
}