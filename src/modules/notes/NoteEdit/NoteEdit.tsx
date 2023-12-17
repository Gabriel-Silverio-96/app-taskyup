import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import NoteEditView from "modules/notes/NoteEdit/NoteEditView";
import { TuplesNoteAndTodoResponse } from "modules/notes/NoteEdit/components/NoteTodo/types";
import {
	INITIAL_STATE_TODO_DATA,
	NOTE_EDIT_QUERY_KEY,
} from "modules/notes/NoteEdit/constants";
import { NoteEditSchema } from "modules/notes/NoteEdit/schema";
import {
	fetchGetOneNoteService,
	fetchGetTodosService,
	fetchPostTodosService,
	fetchPutNoteService,
} from "modules/notes/NoteEdit/services";
import {
	INoteEditForm,
	ITodoData,
	TypeTodoIdsToDelete,
} from "modules/notes/NoteEdit/types";
import { NOTE_QUERY_KEY } from "shared/constants";

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
		resolver: yupResolver(NoteEditSchema),
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
			fetchGetTodosService({ params: { board_id, related_id: note_id } }),
		]);
	};

	const { isFetching, refetch } = useQuery<TuplesNoteAndTodoResponse>(
		[NOTE_EDIT_QUERY_KEY.FETCH_GET_ONE_NOTE],
		queryFn,
		{ onSuccess: onSuccessQuery }
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
			fetchPutNoteService({ params: { note_id, board_id }, body: form }),
			fetchPostTodosService({
				body: {
					todos: todoData.todos,
					todo_ids_to_delete: todoIdsToDelete,
					board_id,
					related_id: note_id,
				},
			}),
		]);
	};

	const { mutate: handleSubmitNoteEdit, isLoading: isSaving } = useMutation(
		mutationFn,
		{ onSuccess: onSuccessMutation }
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
