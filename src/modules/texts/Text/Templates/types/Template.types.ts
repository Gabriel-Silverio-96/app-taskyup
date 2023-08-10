export type TypeTemplateName = "table" | "todo" | "readme" | "code" | "diagram";

export interface ITemplatesView {
	isOpenTemplates: boolean;
	createTextTemplate: (template: TypeTemplateName) => void;
	isLoading: boolean;
}
