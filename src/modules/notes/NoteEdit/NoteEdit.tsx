import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import NoteEditView from "./NoteEditView";
import { TuplesNoteAndTodoResponse } from "./components/NoteTodo/types";
import { INITIAL_STATE_TODO_DATA, NOTE_EDIT_QUERY_KEY } from "./constants";
import schema from "./schema";
import {
	fetchGetListTodoService,
	fetchGetOneNoteService,
	fetchPostListTodoService,
	fetchPutNoteService,
} from "./service";
import { INoteEditForm, ITodoData, TypeTodoIdsToDelete } from "./types";
import { NOTE_QUERY_KEY } from "modules/notes/Note/constants";

const NoteEdit: React.FC = () => {
	const queryClient = useQueryClient();

	const [searchParams] = useSearchParams();
	const note_id = searchParams.get("note_id");
	const board_id = searchParams.get("board_id");

	const [todoData, setTodoData] = useState<ITodoData>(
		INITIAL_STATE_TODO_DATA
	);

	const [todoIdsToDelete, setTodoIdsToDelete] = useState<TypeTodoIdsToDelete>(
		[]
	);

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<INoteEditForm>({
		resolver: yupResolver(schema),
		mode: "all",
	});

	const onSuccessQuery = (data: TuplesNoteAndTodoResponse) => {
		const [note, todo] = data;
		setValue("color_note", note.color_note);
		setValue("title_note", note.title_note);
		setValue("observation", note.observation);

		setTodoData(todo);
	};

	const queryFn = async () => {
		return await Promise.all([
			fetchGetOneNoteService(note_id),
			fetchGetListTodoService({ board_id, related_id: note_id }),
		]);
	};
	const optionsQuery = { onSuccess: onSuccessQuery };

	const { isFetching, refetch } = useQuery<TuplesNoteAndTodoResponse>(
		[NOTE_EDIT_QUERY_KEY.FETCH_GET_ONE_NOTE],
		queryFn,
		optionsQuery
	);

	useEffect(() => {
		refetch();
	}, [board_id, note_id]);

	const onSuccessMutation = async () => {
		setTodoIdsToDelete([]);
		return await Promise.all([
			queryClient.invalidateQueries([NOTE_QUERY_KEY.FETCH_GET_NOTES]),
			queryClient.invalidateQueries([
				NOTE_EDIT_QUERY_KEY.FETCH_GET_ONE_NOTE,
			]),
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
	const { mutate: handleSubmitNoteEdit, isLoading: isSaving } = useMutation(
		mutationFn,
		optionsMutation
	);

	return (
		<NoteEditView
			{...{
				register,
				handleSubmit,
				handleSubmitNoteEdit,
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
