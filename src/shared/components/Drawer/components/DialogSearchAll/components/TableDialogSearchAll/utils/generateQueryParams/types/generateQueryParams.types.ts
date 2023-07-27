import { TYPE_BOARD } from "shared/common/types/AppTypes";

export interface IGenerateQueryParams {
    id: string;   
    type_board: TYPE_BOARD;   
    board_id: string;
}

export interface IGenerateQueryParamsReturn {
    board_id: string;   
    text_id?: string;   
    note_id?: string;   
    [ key: string ]: string | undefined;
}