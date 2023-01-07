export type TFetchParams = string | null;

export interface IFetchText {
    text: string;
    title_text: string;
    created_at: string;
}

export interface IFetchEditText {
    board_id: TFetchParams;
    text_id: TFetchParams;
    data: IFetchText;
}