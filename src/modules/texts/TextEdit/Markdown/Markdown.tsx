import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { ChangeEvent, memo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
	INITIAL_STATE_DATA_TEXT,
	QUERY_KEY_FETCH_GET_ONE_TEXT,
} from "./constant";
import MarkdownView from "./MarkdownView";
import { fetchPatchTextService, fetchGetOneTextService } from "./service";
import { IDataText, IFetchGetOneTextResponse } from "./types";

const Markdown: React.FC = () => {
	const queryClient = useQueryClient();

	const [searchParams] = useSearchParams();
	const text_id = searchParams.get("text_id");
	const board_id = searchParams.get("board_id");

	const [dataText, setDataText] = useState<IDataText>(
		INITIAL_STATE_DATA_TEXT
	);

	const queryFn = () => fetchGetOneTextService(text_id);
	const onSuccessQuery = (data: IFetchGetOneTextResponse) =>
		setDataText(data);

	const { isFetching: isLoading, refetch } = useQuery(
		[QUERY_KEY_FETCH_GET_ONE_TEXT],
		queryFn,
		{
			onSuccess: onSuccessQuery,
		}
	);

	useEffect(() => {
		refetch();
	}, [text_id]);

	const onChangeText = (text: string) =>
		setDataText(prevState => ({ ...prevState, text }));

	const onChangeTextTitle = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setDataText(prevState => ({ ...prevState, title_text: value }));
	};

	const onSuccessMutation = () => queryClient.invalidateQueries(["texts"]);
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
