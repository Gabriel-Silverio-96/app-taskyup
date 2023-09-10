import { fetchGetTemplateTextService } from "modules/texts/Text/components/Templates/service";
import { TypeTemplateName } from "modules/texts/Text/components/Templates/types";
import { selectTemplate } from "./select-template";

const MOUNT_BODY_ERROR_MESSAGE =
	"There was a problem and the template was not generated";

const mountTemplateBody = async (templateName: TypeTemplateName) => {
	const { title_text, markdown } = selectTemplate(templateName);
	try {
		const text = await fetchGetTemplateTextService(markdown);
		const data = { title_text, text };

		return data;
	} catch (error) {
		const data = { title_text, text: MOUNT_BODY_ERROR_MESSAGE };

		return data;
	}
};

export { selectTemplate, mountTemplateBody, MOUNT_BODY_ERROR_MESSAGE };
