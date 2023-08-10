export type Template = "table" | "todo" | "readme" | "code" | "diagram";

export interface ITemplatesView {
    isOpenTemplates: boolean;
    createTextTemplate: (template: Template) => void;
    isLoading: boolean;
}