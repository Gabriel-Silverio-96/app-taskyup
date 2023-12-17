import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { ChangeEvent, memo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MENU_QUERY_KEY, TEXT_QUERY_KEY } from "shared/constants";
import {
	INITIAL_STATE_DATA_TEXT,
	useContextTextEdit,
} from "modules/texts/TextEdit/Context";
import MarkdownView from "./MarkdownView";
import {
	fetchGetOneTextService,
	fetchPatchTextService,
} from "modules/texts/TextEdit/components/Markdown/services";

const Markdown: React.FC = () => {
	const queryClient = useQueryClient();

	const { dataText, setDataText } = useContextTextEdit();

	const [searchParams] = useSearchParams();
	const text_id = searchParams.get("text_id");
	const board_id = searchParams.get("board_id");

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchGetOneText = async () => {
			try {
				const data = await fetchGetOneTextService(text_id);
				setDataText(data);
			} catch (error) {
				setDataText(INITIAL_STATE_DATA_TEXT);
			} finally {
				setIsLoading(false);
			}
		};
		fetchGetOneText();
	}, [text_id]);

	const onChangeText = (text: string) =>
		setDataText(prevState => ({ ...prevState, text }));

	const onChangeTextTitle = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setDataText(prevState => ({ ...prevState, title_text: value }));
	};

	const onSuccessMutation = async () => {
		return await Promise.all([
			queryClient.invalidateQueries([TEXT_QUERY_KEY.FETCH_GET_ALL_TEXTS]),
			queryClient.invalidateQueries([MENU_QUERY_KEY.FETCH_GET_MENU]),
		]);
	};

	const optionsMutation = { onSuccess: onSuccessMutation };

	const mutationFn = () =>
		fetchPatchTextService({
			params: { board_id, text_id },
			data: dataText,
		});
	const { mutate, isLoading: isSaving } = useMutation(
		mutationFn,
		optionsMutation
	);

	return (
		<MarkdownView
			{...{
				dataText,
				onChangeText,
				mutate,
				onChangeTextTitle,
				isLoading,
				isSaving,
			}}
		/>
	);
};

export default memo(Markdown);
