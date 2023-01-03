import React, { memo, useState } from "react";
import MarkdownView from "./MarkdownView";
import MarkdownIt from "markdown-it";
import { TRenderHTML } from "./types/Markdown.component";

const Markdown: React.FC = () => {
	const [value, setValue] = useState<string>("");
    
	const renderHTML = (text: string): TRenderHTML => {
		const mdParser = new MarkdownIt();        
		return mdParser.render(text);
	};

	return <MarkdownView {... {value, setValue, renderHTML}} />;
};

export default memo(Markdown);