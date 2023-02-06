import mermaid from "@bytemd/plugin-mermaid";
import frontmatter from "@bytemd/plugin-frontmatter";
import gfm from "@bytemd/plugin-gfm";
import gemoji from "@bytemd/plugin-gemoji";

export const INITIAL_STATE_DATA = { title_board: "", title_text: "", text: "", created_at: "" };

export const PLUGINS = [frontmatter(), gfm(), mermaid(), gemoji()];