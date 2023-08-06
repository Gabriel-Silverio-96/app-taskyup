import { fetchGetTemplateTextService } from "modules/texts/Text/Templates/service";
import { Template } from "../../types/Template.component";
import { selectTemplate } from "./select-template";

const mountBody = async (template: Template) => {
	const { title_text, markdown } = selectTemplate(template);
	try {
		const text = await fetchGetTemplateTextService(markdown);
		const data = { title_text, text };

		return data;
	} catch (error) {
		const data = {
			title_text,
			text: "There was a problem and the template was not generated",
		};
		return data;
	}
};

export { selectTemplate, mountBody };
