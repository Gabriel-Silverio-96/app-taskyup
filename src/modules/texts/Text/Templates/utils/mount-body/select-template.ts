import {
	CodeTemplate,
	DiagramTemplate,
	ReadmeTemplate,
	TableTemplate,
	TodoTemplate,
} from "modules/texts/Text/Templates/model-templates";
import { Template } from "modules/texts/Text/Templates/types/Template.component";
import { ITemplates } from "./types";

const selectTemplate = (template: Template) => {
	const defaultTemplate = {
		title_text: "Table template",
		text: TableTemplate,
	};

	const templatesMapping: ITemplates = {
		table: { title_text: "Table template", markdown: TableTemplate },
		todo: { title_text: "Todo template", markdown: TodoTemplate },
		readme: { title_text: "Readme template", markdown: ReadmeTemplate },
		code: { title_text: "Code template", markdown: CodeTemplate },
		diagram: { title_text: "Diagram template", markdown: DiagramTemplate },
	};

	const result = templatesMapping[template] || defaultTemplate;
	return result;
};

export { selectTemplate };
