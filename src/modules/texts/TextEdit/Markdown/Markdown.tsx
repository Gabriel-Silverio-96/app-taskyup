import { useQueryClient } from "@tanstack/react-query";
import MarkdownIt from "markdown-it";
import React, { ChangeEvent, memo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { INITIAL_STATE_DATA } from "./constant";
import MarkdownView from "./MarkdownView";
import { fetchEditText, fetchText } from "./service";
import { IData, TRenderHTML } from "./types/Markdown.component";

const Markdown: React.FC = () => {
	const queryClient = useQueryClient();

	const [searchParams] = useSearchParams();
	const text_id = searchParams.get("text_id");
	const board_id = searchParams.get("board_id");
	
	const [data, setData] = useState<IData>(INITIAL_STATE_DATA);
	const [isLoading, setIsLoading] = useState(true);
	const [isSaving, setIsSaving] = useState(false);

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
			} finally {
				setIsLoading(false);
			}
		};
		getText();
	}, [text_id]);

	const onChangeText = (text: string) => setData(prevState => ({ ...prevState, text }));
	

	const onChangeTextTitle = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;		
		setData(prevState => ({ ...prevState, title_text: value }));	
	};

	const saveText = async () => {
		try {
			setIsSaving(true);
			await fetchEditText({ board_id, text_id, data });
			queryClient.invalidateQueries(["texts"]);

		} catch (error) {
			console.error("SaveText ", error);			
		} finally {
			setIsSaving(false);
		}
		
	};	

	return <MarkdownView {...{ data, renderHTML, onChangeText, saveText, onChangeTextTitle, isLoading, isSaving }} />;
};

export default memo(Markdown);
