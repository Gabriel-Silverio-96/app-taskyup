import { useQueryClient } from "@tanstack/react-query";
import React, { ChangeEvent, memo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { INITIAL_STATE_DATA } from "./constant";
import MarkdownView from "./MarkdownView";
import { fetchPatchTextService, fetchGetOneTextService } from "./service";
import { IData } from "./types";

const Markdown: React.FC = () => {
	const queryClient = useQueryClient();

	const [searchParams] = useSearchParams();
	const text_id = searchParams.get("text_id");
	const board_id = searchParams.get("board_id");

	const [data, setData] = useState<IData>(INITIAL_STATE_DATA);
	const [isLoading, setIsLoading] = useState(true);
	const [isSaving, setIsSaving] = useState(false);

	useEffect(() => {
		const getOneText = async () => {
			try {
				const data = await fetchGetOneTextService(text_id);
				setData(data);
			} catch (error) {
				console.error("TextEdit ", error);
			} finally {
				setIsLoading(false);
			}
		};
		getOneText();
	}, [text_id]);

	const onChangeText = (text: string) =>
		setData(prevState => ({ ...prevState, text }));

	const onChangeTextTitle = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setData(prevState => ({ ...prevState, title_text: value }));
	};

	const handleClickSaveText = async () => {
		try {
			setIsSaving(true);
			await fetchPatchTextService({ board_id, text_id, data });
			queryClient.invalidateQueries(["texts"]);
		} catch (error) {
			console.error("handleClickSaveText ", error);
		} finally {
			setIsSaving(false);
		}
	};

	return (
		<MarkdownView
			{...{
				data,
				onChangeText,
				handleClickSaveText,
				onChangeTextTitle,
				isLoading,
				isSaving,
			}}
		/>
	);
};

export default memo(Markdown);
