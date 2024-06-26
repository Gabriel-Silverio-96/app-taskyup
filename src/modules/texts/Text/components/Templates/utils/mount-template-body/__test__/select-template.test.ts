import { TypeTemplateName } from "modules/texts/Text/components/Templates/types";
import {
	selectTemplate,
	templatesMapping,
} from "modules/texts/Text/components/Templates/utils/mount-template-body";

type TestsCases = Array<
	[TypeTemplateName | any, { title_text: string; markdown: string }]
>;

const TESTS_CASES: TestsCases = Object.entries(templatesMapping);

describe("Function selectTemplate", () => {
	test.each(TESTS_CASES)(
		"Should return the correct template for the given template name %s",
		(templateName, { title_text, markdown }) => {
			const result = selectTemplate(templateName);

			const expected = { title_text, markdown };
			expect(result).toEqual(expected);
		}
	);
});
