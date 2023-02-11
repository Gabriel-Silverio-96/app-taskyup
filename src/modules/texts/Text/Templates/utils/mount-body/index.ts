import fetchTemplateText from "../../service";
import { Template } from "../../types/Template.component";
import TableTemplate from "../../model-templates/table.md";
import TodoTemplate from "../../model-templates/todo.md";
import ReadmeTemplate from "../../model-templates/readme.md";
import DiagramTemplate from "../../model-templates/diagram.md";
import CodeTemplate from "../../model-templates/code.md";
import { ITemplates } from "./types";

const selectTemplate = (template: Template) => {
	const defaultTemplate = { title_text: "TaskYup", text: TableTemplate };

	const templates: ITemplates = {
		table: { title_text: "Text template", markdown: TableTemplate },
		todo: { title_text: "Todo template", markdown: TodoTemplate },
		readme: { title_text: "Readme template", markdown: ReadmeTemplate },
		code: { title_text: "Code template", markdown: CodeTemplate },
		diagram: { title_text: "Diagram template", markdown: DiagramTemplate },
	};

	const body = templates[template] || defaultTemplate;	
	return body;
};

const mountBody = async (template: Template) => {
	const { title_text, markdown } = selectTemplate(template);
	try {
		const text = await fetchTemplateText(markdown);
		const data = { title_text, text };

		return data;
	} catch (error) {
		console.error("mountBody ", error);		

		const data = { title_text, text: "There was a problem and the template was not generated" };
		return data;
	}
};
 
export { selectTemplate, mountBody };