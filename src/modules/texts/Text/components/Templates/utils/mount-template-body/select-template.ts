import {
	CodeTemplate,
	DiagramTemplate,
	ReadmeTemplate,
	TableTemplate,
	TodoTemplate,
} from "modules/texts/Text/components/Templates/model-templates";
import type { TypeTemplateName } from "modules/texts/Text/components/Templates/types";
import type { ITemplatesMapping } from "modules/texts/Text/components/Templates/utils/mount-template-body/types";

export const templatesMapping: ITemplatesMapping = {
	table: { title_text: "Table template", markdown: TableTemplate },
	todo: { title_text: "Todo template", markdown: TodoTemplate },
	readme: { title_text: "Readme template", markdown: ReadmeTemplate },
	code: { title_text: "Code template", markdown: CodeTemplate },
	diagram: { title_text: "Diagram template", markdown: DiagramTemplate },
};

export const selectTemplate = (templateName: TypeTemplateName) => {
	const defaultTemplate = {
		title_text: "Table template",
		markdown: TableTemplate,
	};

	const result = templatesMapping[templateName] || defaultTemplate;
	return result;
};
