import { getTemplateTextService } from "modules/texts/Text/components/Templates/services";
import { TypeTemplateName } from "modules/texts/Text/components/Templates/types";
import { selectTemplate } from "modules/texts/Text/components/Templates/utils/mount-template-body";

export const MOUNT_BODY_ERROR_MESSAGE =
	"There was a problem and the template was not generated";

export const mountTemplateBody = async (templateName: TypeTemplateName) => {
	const { title_text, markdown } = selectTemplate(templateName);
	try {
		const text = await getTemplateTextService(markdown);
		const data = { title_text, text };

		return data;
	} catch (error) {
		const data = { title_text, text: MOUNT_BODY_ERROR_MESSAGE };

		return data;
	}
};
