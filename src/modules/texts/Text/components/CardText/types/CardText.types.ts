import { Palette } from "@mui/material";

export interface IText {
    text_id: string;
    title_text: string;
    created_at: string;
}

export interface IFetchGetAllTextResponse {
    count: number;
    title: string;   
    texts: IText[];   
}

export interface ICardTextView {
    palette: Palette;   
    data: IFetchGetAllTextResponse | undefined;   
    isFetching: boolean;
    handleClickCreateText: () => void;
    isCreatingText: boolean;
    board_id: string | undefined;
    openDialogDeleteSingleText: (textID: string) => void;
}