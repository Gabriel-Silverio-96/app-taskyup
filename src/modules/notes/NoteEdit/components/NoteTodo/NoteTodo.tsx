import { useQuery } from "@tanstack/react-query";
import React, { ChangeEvent, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchGetListTodoService } from "../../service";
import { ITodoData } from "../../types";
import NoteTodoView from "./NoteTodoView";
import { todoEditCheckboxValue } from "./utils/todo-edit-checkbox-value";

const NoteTodo: React.FC<any> = ({ todoData, setTodoData }) => {
	const [searchParams] = useSearchParams();
	const board_id = searchParams.get("board_id");
	const note_id = searchParams.get("note_id");

	const onSuccessQuery = (data: ITodoData) => setTodoData(data);
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
		const todos = todoEditCheckboxValue({ todoData, checked, todo_id });

		setTodoData((prevState: any) => ({ ...prevState, todos }));
	};

	const handleChangeTextField = (event: any, todo_id: string) => {
		const { value } = event.target;

		const edit = todoData.todos.map((todo: any) => {
			if (todo.todo_id === todo_id) todo.title_todo = value;
			return todo;
		});
		console.log(edit);
	};

	console.log(...todoData.todos);

	return (
		<NoteTodoView
			{...{
				todoData,
				handleChangeCheckbox,
				handleChangeTextField,
			}}
		/>
	);
};

export default NoteTodo;
