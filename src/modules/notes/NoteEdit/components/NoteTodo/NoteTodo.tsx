import { useQuery } from "@tanstack/react-query";
import { fetchGetListTodoService } from "modules/notes/NoteEdit/service";
import { IFetchGetListTodoResponse } from "modules/notes/NoteEdit/types";
import React, {
	ChangeEvent,
	FocusEvent,
	KeyboardEvent,
	useEffect,
	useState,
} from "react";
import { useSearchParams } from "react-router-dom";
import NoteTodoView from "./NoteTodoView";
import { generateNewTodo } from "./utils/generate-new-todo/generate-new-todo";
import { todoEditCheckedValue } from "./utils/todo-edit-checked-value";
import { todoEditTitleValue } from "./utils/todo-edit-title-value";

const NoteTodo: React.FC<any> = ({ todoData, setTodoData }) => {
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

	const createNewTodo = () => {
		const newTodo = generateNewTodo();

		setTodoData((prevState: any) => ({
			...prevState,
			todos: [...prevState.todos, newTodo],
		}));
	};

	const handleClickNewTodo = () => createNewTodo();

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		const hasPressEnter = event.key === "Enter";
		if (hasPressEnter) {
			setIsAutoFocus(true);
			createNewTodo();
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
			}}
		/>
	);
};

export default NoteTodo;
