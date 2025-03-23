import type { IBodyNote } from "modules/notes/types";

export const DEFAULT_BODY_NOTE = {
	color_note: "#9C10FF",
	title_note: "Title note",
	observation: "",
};

const mountBodyNote = (body?: IBodyNote): IBodyNote =>
	Object.assign(DEFAULT_BODY_NOTE, body);

export { mountBodyNote };
