import { IFetchResponseDefault } from "shared/common/types/Fetch";

export interface IFetchCreateText extends IFetchResponseDefault {
    text_id: string;   
}

export interface IFetchTextBody {
    title_text: string;   
    text: string;   
}


