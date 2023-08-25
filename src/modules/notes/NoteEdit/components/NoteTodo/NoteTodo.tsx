import { useQuery } from "@tanstack/react-query";
import { fetchGetListTodoService } from "modules/notes/NoteEdit/service";
import {
	IFetchGetListTodoResponse,
	ITodoData,
	TypeTodoIdsToDelete,
} from "modules/notes/NoteEdit/types";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NoteTodoView from "./NoteTodoView";
import {
	IHandleBlurTextField,
	IHandleChangeCheckbox,
	IHandleClickDeleteTodo,
	IHandleKeyDown,
	INoteTodo,
} from "./types";
import { generateNewTodo } from "./utils/generate-new-todo/generate-new-todo";
import { todoEditCheckedValue } from "./utils/todo-edit-checked-value";
import { todoEditTitleValue } from "./utils/todo-edit-title-value";
import { todoDeleteById } from "./utils/todo-delete-by-id/todo-delete-by-id";

const NoteTodo: React.FC<INoteTodo> = ({
	todoData,
	setTodoData,
	setTodoIdsToDelete,
}) => {
	const [searchParams] = useSearchParams();
	const board_id = searchParams.get("board_id");
	const note_id = searchParams.get("note_id");

	const [isAutoFocus, setIsAutoFocus] = useState(false);

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

	const handleChangeCheckbox: IHandleChangeCheckbox = (event, todo_id) => {
		const { checked } = event.target;
		const todos = todoEditCheckedValue({ todoData, checked, todo_id });

		setTodoData((prevState: ITodoData) => ({ ...prevState, todos }));
	};

	const handleBlurTextField: IHandleBlurTextField = (event, todo_id) => {
		const { value } = event.target;

		const todos = todoEditTitleValue({ todoData, todo_id, value });
		setTodoData((prevState: ITodoData) => ({ ...prevState, todos }));
	};

	const createNewTodo = () => {
		const newTodo = generateNewTodo(todoData);

		setTodoData((prevState: ITodoData) => ({
			...prevState,
			todos: [...prevState.todos, newTodo],
		}));
	};

	const handleClickNewTodo = () => createNewTodo();

	const handleKeyDown: IHandleKeyDown = event => {
		const hasPressEnter = event.key === "Enter";
		if (hasPressEnter) {
			setIsAutoFocus(true);
			createNewTodo();
		}
	};

	const handleClickDeleteTodo: IHandleClickDeleteTodo = (
		todo_id,
		related_id
	) => {
		const todosOneDeleted = todoDeleteById(todoData, todo_id);

		setTodoData((prevState: ITodoData) => ({
			...prevState,
			todos: todosOneDeleted,
		}));

		if (related_id) {
			setTodoIdsToDelete((prevState: TypeTodoIdsToDelete) => [
				...prevState,
				todo_id,
			]);
		}
	};

	return (
		<NoteTodoView
			{...{
				todoData,
				handleChangeCheckbox,
				handleBlurTextField,
				handleClickNewTodo,
				handleKeyDown,
				isAutoFocus,
				handleClickDeleteTodo,
			}}
		/>
	);
};

export default NoteTodo;
