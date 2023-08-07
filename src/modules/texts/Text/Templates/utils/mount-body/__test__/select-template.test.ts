import { Template } from "modules/texts/Text/Templates/types/Template.component";
import { selectTemplate, templatesMapping } from "../select-template";

type TestsCases = Array<
	[Template | any, { title_text: string; markdown: string }]
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
