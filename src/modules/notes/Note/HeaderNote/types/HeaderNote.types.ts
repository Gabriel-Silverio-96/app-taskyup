import { IFetchGetSingleBoard, IFetchResponseDefault } from "shared/common/types/Fetch";

export interface IHeaderNoteView {
    data: IFetchGetSingleBoard | undefined;
    handleClickCreateNote: () => void;
    openDialogDeleteAllNotes: () => void;
    isMediumScreen: boolean;
    countNotes: number;
    isLoading: boolean;
}

export interface IFetchPostCreateNoteResponse extends IFetchResponseDefault {
    results: {
        note_id: string;
    }
}

export interface IFetchPostCreateNoteService {
    board_id: string | undefined;
    payload: {
        color_note: string;
        title_note: string;
        observation: string;
    }
}