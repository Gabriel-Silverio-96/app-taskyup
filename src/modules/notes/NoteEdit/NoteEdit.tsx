import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import NoteEditView from "./NoteEditView";
import schema from "./schema";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
	fetchGetOneNoteService,
	fetchPostListTodoService,
	fetchPutNoteService,
} from "./service";
import { useSearchParams } from "react-router-dom";
import { IFetchGetOneNoteResponse, INoteEditForm, ITodoData } from "./types";

const NoteEdit: React.FC = () => {
	const queryClient = useQueryClient();

	const [searchParams] = useSearchParams();
	const note_id = searchParams.get("note_id");
	const board_id = searchParams.get("board_id");

	const [todoData, setTodoData] = useState<ITodoData>({
		count: 0,
		todos: [],
	});

	const [todoIdsToDelete, setTodoIdsToDelete] = useState<Array<string>>([]);

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<INoteEditForm>({
		resolver: yupResolver(schema),
		mode: "all",
	});

	const onSuccessQuery = (data: IFetchGetOneNoteResponse) => {
		setValue("color_note", data.color_note);
		setValue("title_note", data.title_note);
		setValue("observation", data.observation);
	};

	const queryKey = ["get_one_note"];
	const queryFn = () => fetchGetOneNoteService(note_id);
	const optionsQuery = { onSuccess: onSuccessQuery };

	const { isFetching, refetch } = useQuery<IFetchGetOneNoteResponse>(
		queryKey,
		queryFn,
		optionsQuery
	);

	useEffect(() => {
		refetch();
	}, [board_id, note_id]);

	const onSuccessMutation = async () => {
		await Promise.all([
			queryClient.invalidateQueries(["notes"]),
			queryClient.invalidateQueries(["get_list_todo"]),
		]);
	};

	const mutationFn = async (form: INoteEditForm) => {
		return await Promise.all([
			fetchPutNoteService({ payload: form, note_id, board_id }),
			fetchPostListTodoService({
				payload: { todoData, todoIdsToDelete },
				board_id,
				note_id,
			}),
		]);
	};

	const optionsMutation = { onSuccess: onSuccessMutation };

	const { mutate: noteEditSubmit, isLoading: isSaving } = useMutation(
		mutationFn,
		optionsMutation
	);

	return (
		<NoteEditView
			{...{
				register,
				handleSubmit,
				noteEditSubmit,
				errors,
				isFetching,
				isSaving,
				todoData,
				setTodoData,
				setTodoIdsToDelete,
			}}
		/>
	);
};

export default NoteEdit;
