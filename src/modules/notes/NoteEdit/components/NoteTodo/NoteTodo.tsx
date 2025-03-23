import type {
	ITodoData,
	TypeTodoIdsToDelete,
} from "modules/notes/NoteEdit/types";
import React, { useState } from "react";
import NoteTodoView from "modules/notes/NoteEdit/components/NoteTodo/NoteTodoView";
import type {
	IHandleBlurTextField,
	IHandleChangeCheckbox,
	IHandleClickDeleteTodo,
	IHandleKeyDown,
	INoteTodo,
} from "modules/notes/NoteEdit/components/NoteTodo/types";
import {
	generateNewTodo,
	todoDeleteById,
	todoEditCheckedValue,
	todoEditTitleValue,
} from "modules/notes/NoteEdit/components/NoteTodo/utils";

const NoteTodo: React.FC<INoteTodo> = ({
	todoData,
	setTodoData,
	setTodoIdsToDelete,
}) => {
	const [isAutoFocus, setIsAutoFocus] = useState(false);

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
