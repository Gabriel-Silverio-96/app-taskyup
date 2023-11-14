import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { ChangeEvent, memo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MarkdownView from "./MarkdownView";
import { INITIAL_STATE_DATA_TEXT } from "./constant";
import { fetchGetOneTextService, fetchPatchTextService } from "./service";
import { IDataText } from "./types";
import { TEXT_QUERY_KEY } from "shared/services/constants/texts";
import { ASIDE_QUERY_KEY } from "shared/components/Drawer/components/Aside/constants";

const Markdown: React.FC = () => {
	const queryClient = useQueryClient();

	const [searchParams] = useSearchParams();
	const text_id = searchParams.get("text_id");
	const board_id = searchParams.get("board_id");

	const [isLoading, setIsLoading] = useState(true);
	const [dataText, setDataText] = useState<IDataText>(
		INITIAL_STATE_DATA_TEXT
	);

	useEffect(() => {
		const fetchGetOneText = async () => {
			try {
				const data = await fetchGetOneTextService(text_id);
				setDataText(data);
			} catch (error) {
				console.error("TextEdit ", error);
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
			queryClient.invalidateQueries([ASIDE_QUERY_KEY.FETCH_GET_MENU]),
		]);
	};

	const optionsMutation = { onSuccess: onSuccessMutation };

	const mutationFn = () =>
		fetchPatchTextService({ board_id, text_id, data: dataText });
	const { mutate: handleClickSaveText, isLoading: isSaving } = useMutation(
		mutationFn,
		optionsMutation
	);

	return (
		<MarkdownView
			{...{
				dataText,
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
