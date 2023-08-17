import frontmatter from "@bytemd/plugin-frontmatter";
import gemoji from "@bytemd/plugin-gemoji";
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
import mermaid from "@bytemd/plugin-mermaid";
import { IDataText } from "../types";

export const INITIAL_STATE_DATA_TEXT: IDataText = {
	title_board: "",
	title_text: "",
	text: "",
	created_at: "",
};

export const BYTEMD_EDITOR_PLUGINS = [
	highlight(),
	frontmatter(),
	gfm(),
	mermaid(),
	gemoji(),
];

export const QUERY_KEY_FETCH_GET_ONE_TEXT = "QUERY_KEY_FETCH_GET_ONE_TEXT";
