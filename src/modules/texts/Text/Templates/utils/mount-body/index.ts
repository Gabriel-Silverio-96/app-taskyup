import { fetchTemplateText } from "../../service";
import { Template } from "../../types/Template.component";
import TableTemplate from "../../model-templates/Table.md";
import TodoTemplate from "../../model-templates/Todo.md";
import ReadmeTemplate from "../../model-templates/Readme.md";
import { ITemplates } from "./types";

const selectTemplate = (template: Template) => {
	const defaultTemplate = TableTemplate;

	const templates: ITemplates = {
		text: TableTemplate,
		todo: TodoTemplate,
		readme: ReadmeTemplate,
	};

	const body = templates[template] || defaultTemplate;	
	return body;
};

const mountBody = async (template: Template) => {
	const dateNow = Date.now();
	const title_text = `Template ${dateNow}`;	

	const markdown = selectTemplate(template);
	try {
		const text = await fetchTemplateText(markdown);
		const data = { title_text, text };

		return data;
	} catch (error) {
		console.log("mountBody ", error);		

		const data = { title_text, text: "There was a problem and the template was not generated" };		
		return data;
	}
};
 
export { selectTemplate, mountBody };