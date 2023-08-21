import { useQuery } from "@tanstack/react-query";
import { fetchGetListTodoService } from "modules/notes/NoteEdit/service";
import { IFetchGetListTodoResponse } from "modules/notes/NoteEdit/types";
import React, { ChangeEvent, FocusEvent, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import NoteTodoView from "./NoteTodoView";
import { todoEditCheckedValue } from "./utils/todo-edit-checked-value";
import { todoEditTitleValue } from "./utils/todo-edit-title-value";

const NoteTodo: React.FC<any> = ({ todoData, setTodoData }) => {
	const [searchParams] = useSearchParams();
	const board_id = searchParams.get("board_id");
	const note_id = searchParams.get("note_id");

	const onSuccessQuery = (data: IFetchGetListTodoResponse) =>
		setTodoData(data);

	const queryKey = ["get_list_todo"];
	const queryFn = () =>
		fetchGetListTodoService({ board_id, related_id: note_id });

	const optionsQuery = { onSuccess: onSuccessQuery };

	const { refetch } = useQuery(queryKey, queryFn, optionsQuery);

	useEffect(() => {
		refetch();
	}, [note_id, board_id]);

	const handleChangeCheckbox = (
		event: ChangeEvent<HTMLInputElement>,
		todo_id: string
	) => {
		const { checked } = event.target;
		const todos = todoEditCheckedValue({ todoData, checked, todo_id });

		setTodoData((prevState: any) => ({ ...prevState, todos }));
	};

	const handleBlurTextField = (
		event: FocusEvent<HTMLInputElement>,
		todo_id: string
	) => {
		const { value } = event.target;

		const todos = todoEditTitleValue({ todoData, todo_id, value });
		setTodoData((prevState: any) => ({ ...prevState, todos }));
	};

	return (
		<NoteTodoView
			{...{
				todoData,
				handleChangeCheckbox,
				handleBlurTextField,
			}}
		/>
	);
};

export default NoteTodo;
