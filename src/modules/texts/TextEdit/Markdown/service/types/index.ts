export type TFetchParams = string | null;

export interface IFetchText {
    text: string;
    title_text: string;
    created_at: string;
}

export interface IFetchEditText {
    board_id: string;
    text_id: string;
    data: IFetchText;
}