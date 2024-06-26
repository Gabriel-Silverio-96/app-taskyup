import frontmatter from "@bytemd/plugin-frontmatter";
import gemoji from "@bytemd/plugin-gemoji";
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
import mermaid from "@bytemd/plugin-mermaid";

export const BYTEMD_EDITOR_PLUGINS = [
	highlight(),
	frontmatter(),
	gfm(),
	mermaid(),
	gemoji(),
];
