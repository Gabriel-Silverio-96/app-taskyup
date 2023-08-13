import { ChangeEvent } from "react";

export interface IData {
    text: string;
    title_board: string;
    title_text: string;
    created_at: string;
}

export interface IMarkdownView {
    data: IData;
    onChangeText:(text: string) => void;
    saveText: () => void;
    onChangeTextTitle: (event: ChangeEvent<HTMLInputElement>) => void;
    isLoading: boolean;
    isSaving: boolean; 
}