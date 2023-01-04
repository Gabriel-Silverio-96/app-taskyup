import MarkdownIt from "markdown-it";
import React, { memo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { INITIAL_STATE_DATA } from "./constant";
import MarkdownView from "./MarkdownView";
import { fetchEditText, fetchText } from "./service";
import { IData, TRenderHTML } from "./types/Markdown.component";

const Markdown: React.FC = () => {
	const [searchParams] = useSearchParams();
	const text_id = searchParams.get("text_id");
	const board_id = searchParams.get("board_id");
	
	const [data, setData] = useState<IData>(INITIAL_STATE_DATA);

	const renderHTML = (text: string): TRenderHTML => {
		const mdParser = new MarkdownIt({ breaks: false });
		return mdParser.render(text);
	};

	useEffect(() => {
		const getText = async () => {
			try {
				const data = await fetchText(text_id);
				setData(data);
			} catch (error) {
				console.error("TextEdit ", error);
			}
		};
		getText();
	}, [text_id]);

	const onChange = ({ text }: { text: string }) =>
		setData(prevState => ({ ...prevState, text: text }));	

	const saveText = async () => {
		try {
			await fetchEditText({ board_id, text_id, data });
		} catch (error) {
			console.error("SaveText ", error);			
		}
	};

	return <MarkdownView {...{ data, renderHTML, onChange, saveText }} />;
};

export default memo(Markdown);
