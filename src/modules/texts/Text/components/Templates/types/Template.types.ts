export type TypeTemplateName = "table" | "todo" | "readme" | "code" | "diagram";

export interface ITemplatesView {
	isOpenTemplates: boolean;
	mutate: (template: TypeTemplateName) => void;
	isLoading: boolean;
}
