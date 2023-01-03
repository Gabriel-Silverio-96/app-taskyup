import MarkdownIt from "markdown-it";
import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "shared/services/api";
import MarkdownView from "./MarkdownView";
import { IFetchText, TRenderHTML } from "./types/Markdown.component";

const Markdown: React.FC = () => {
	const { text_id } = useParams();
	const [data, setData] = useState({});

	const renderHTML = (text: string): TRenderHTML => {
		const mdParser = new MarkdownIt({ breaks: false });
		return mdParser.render(text);
	};

	useEffect(() => {
		const fetchText = async () => {
			try {
				const { data } = await api.get<IFetchText>(`/text/text_id=${text_id}`);
				setData(data);
			} catch (error) {
				console.error("TextEdit ", error);
			}
		};

		fetchText();
	}, [text_id]);

	const onChange = ({ text }: { text: string }) =>
		setData(prevState => ({ ...prevState, text: text }));

	return <MarkdownView {...{ data, renderHTML, onChange }} />;
};

export default memo(Markdown);
