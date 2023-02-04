import mermaid from "@bytemd/plugin-mermaid";
import frontmatter from "@bytemd/plugin-frontmatter";


export const INITIAL_STATE_DATA = { text: "", title_text: "", created_at: "" };

export const PLUGINS = [mermaid(), frontmatter()];