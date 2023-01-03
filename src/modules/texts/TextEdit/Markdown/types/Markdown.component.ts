import { HtmlType } from "react-markdown-editor-lite/cjs/editor/preview";

export type TRenderHTML = HtmlType | Promise<HtmlType>;

export interface IFetchText {
    text: string;
    title_text: string;
    created_at: string;
}