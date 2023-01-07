export interface IMenu {
    board_id: string;
    board_type_id: string;
    title: string;
}

export interface IFetchMenu {
    notes: IMenu[];
    texts: IMenu[];
}