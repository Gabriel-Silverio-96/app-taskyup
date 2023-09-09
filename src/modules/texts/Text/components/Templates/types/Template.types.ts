export type TypeTemplateName = "table" | "todo" | "readme" | "code" | "diagram";

export interface ITemplatesView {
	isOpenTemplates: boolean;
	handleClickCreateTextTemplate: (template: TypeTemplateName) => void;
	isLoading: boolean;
}
