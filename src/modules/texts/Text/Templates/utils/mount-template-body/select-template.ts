import {
	CodeTemplate,
	DiagramTemplate,
	ReadmeTemplate,
	TableTemplate,
	TodoTemplate,
} from "modules/texts/Text/Templates/model-templates";
import { Template } from "modules/texts/Text/Templates/types";
import { ITemplatesMapping } from "./types";

const templatesMapping: ITemplatesMapping = {
	table: { title_text: "Table template", markdown: TableTemplate },
	todo: { title_text: "Todo template", markdown: TodoTemplate },
	readme: { title_text: "Readme template", markdown: ReadmeTemplate },
	code: { title_text: "Code template", markdown: CodeTemplate },
	diagram: { title_text: "Diagram template", markdown: DiagramTemplate },
};

const selectTemplate = (templateName: Template) => {
	const defaultTemplate = {
		title_text: "Table template",
		markdown: TableTemplate,
	};

	const result = templatesMapping[templateName] || defaultTemplate;
	return result;
};

export { selectTemplate, templatesMapping };
