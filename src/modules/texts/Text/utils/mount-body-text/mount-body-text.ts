import { IBodyText } from "modules/texts/types";

export const DEFAULT_BODY_TEXT = {
	title_text: "Title text",
	text: "",
};

const mountBodyText = (body?: IBodyText) =>
	Object.assign(DEFAULT_BODY_TEXT, body);

export { mountBodyText };
