import { faker } from "@faker-js/faker";
import { fetchGetTemplateTextService } from "modules/texts/Text/Templates/service";
import { Template } from "modules/texts/Text/Templates/types/Template.component";
import {
	MOUNT_BODY_ERROR_MESSAGE,
	mountBody,
	selectTemplate,
} from "../mount-body";

jest.mock("modules/texts/Text/Templates/service", () => ({
	fetchGetTemplateTextService: jest.fn(),
}));

afterEach(() => {
	jest.clearAllMocks();
});

describe("Function mountBody()", () => {
	test("Should return the data object with fetched text when successful", async () => {
		const template: Template = "table";
		const { title_text } = selectTemplate(template);

		const text = faker.lorem.paragraph(1);
		(fetchGetTemplateTextService as jest.Mock).mockResolvedValueOnce(text);

		const result = await mountBody(template);

		const expected = { title_text, text };
		expect(result).toEqual(expected);
	});

	test("Should return the data object with an error message when there's an error", async () => {
		const template: Template = "table";
		const { title_text } = selectTemplate(template);

		(fetchGetTemplateTextService as jest.Mock).mockRejectedValueOnce(
			new Error("Fetch error")
		);

		const result = await mountBody(template);

		const expected = { title_text, text: MOUNT_BODY_ERROR_MESSAGE };
		expect(result).toEqual(expected);
	});
});