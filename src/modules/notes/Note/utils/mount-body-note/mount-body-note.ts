import type { IBodyNote } from "modules/notes/types";

export const DEFAULT_BODY_NOTE = {
	emoji_image_url:
		"https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f601.png",
	title_note: "Title note",
	observation: "",
};

const mountBodyNote = (body?: IBodyNote): IBodyNote =>
	Object.assign(DEFAULT_BODY_NOTE, body);

export { mountBodyNote };
