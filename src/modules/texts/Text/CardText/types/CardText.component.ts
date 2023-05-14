import { Palette } from "@mui/material";

export interface IText {
    text_id: string;
    title_text: string;
    created_at: string;
}

export interface IFetchTexts {
    count: number;
    title: string;   
    texts: IText[];   
}

export interface ICardTextView {
    palette: Palette;   
    data: IFetchTexts | undefined;   
    isFetching: boolean;
    createText: () => void;
    isCreatingText: boolean;
    board_id: string | undefined;
    openDialogDeleteSingleText: (textID: string) => void;
}