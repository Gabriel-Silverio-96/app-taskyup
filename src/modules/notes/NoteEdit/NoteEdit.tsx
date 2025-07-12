import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import NoteEditView from "modules/notes/NoteEdit/NoteEditView";
import type { TuplesNoteAndTodoResponse } from "modules/notes/NoteEdit/components/NoteTodo/types";
import {
	INITIAL_STATE_TODO_DATA,
	NOTE_EDIT_QUERY_KEY,
	NOTE_EDIT_SCHEMA,
} from "modules/notes/NoteEdit/note-edit.constants";
import {
	getOneNoteService,
	getTodosService,
	postTodosService,
	putNoteService,
} from "modules/notes/NoteEdit/services";
import type {
	INoteEditForm,
	ITodoData,
	TypeTodoIdsToDelete,
} from "modules/notes/NoteEdit/types";
import { MENU_QUERY_KEY, NOTE_QUERY_KEY } from "shared/constants";

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
		watch,
	} = useForm<INoteEditForm>({
		resolver: yupResolver(NOTE_EDIT_SCHEMA),
		mode: "all",
	});

	const onSuccessQuery = (data: TuplesNoteAndTodoResponse) => {
		const [note, todo] = data;
		setValue("emoji_image_url", note.emoji_image_url);
		setValue("title_note", note.title_note);
		setValue("observation", note.observation);

		setTodoData(todo);
	};

	const queryFn = async () => {
		return await Promise.all([
			getOneNoteService(note_id),
			getTodosService({ params: { board_id, related_id: note_id } }),
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
			queryClient.invalidateQueries([MENU_QUERY_KEY.FETCH_GET_MENU]),
			queryClient.invalidateQueries([NOTE_QUERY_KEY.FETCH_GET_NOTES]),
			queryClient.invalidateQueries([
				NOTE_EDIT_QUERY_KEY.FETCH_GET_ONE_NOTE,
			]),
		]);
	};

	const mutationFn = async (form: INoteEditForm) => {
		return await Promise.all([
			putNoteService({ params: { note_id, board_id }, body: form }),
			postTodosService({
				body: {
					todos: todoData.todos,
					todo_ids_to_delete: todoIdsToDelete,
					board_id,
					related_id: note_id,
				},
			}),
		]);
	};

	const { mutate, isLoading: isSaving } = useMutation(mutationFn, {
		onSuccess: onSuccessMutation,
	});

	return (
		<NoteEditView
			{...{
				register,
				handleSubmit,
				mutate,
				errors,
				isFetching,
				isSaving,
				todoData,
				setTodoData,
				setTodoIdsToDelete,
				setValue,
				watch,
			}}
		/>
	);
};

export default NoteEdit;
