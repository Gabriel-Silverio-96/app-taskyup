export type TFetchParams = string | null;

export interface IFetchText {
    title_board?: string;
    title_text: string;
    text: string;
    created_at: string;
}

export interface IFetchEditText {
    board_id: TFetchParams;
    text_id: TFetchParams;
    data: IFetchText;
}