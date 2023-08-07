import { fetchGetTemplateTextService } from "modules/texts/Text/Templates/service";
import { Template } from "modules/texts/Text/Templates/types/Template.component";
import { selectTemplate } from "./select-template";

const MOUNT_BODY_ERROR_MESSAGE =
	"There was a problem and the template was not generated";

const mountBody = async (template: Template) => {
	const { title_text, markdown } = selectTemplate(template);
	try {
		const text = await fetchGetTemplateTextService(markdown);
		const data = { title_text, text };

		return data;
	} catch (error) {
		const data = {
			title_text,
			text: MOUNT_BODY_ERROR_MESSAGE,
		};
		return data;
	}
};

export { selectTemplate, mountBody, MOUNT_BODY_ERROR_MESSAGE };
