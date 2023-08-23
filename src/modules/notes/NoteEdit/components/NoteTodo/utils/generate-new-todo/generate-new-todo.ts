import { ITodoData } from "modules/notes/NoteEdit/types";

const generateNewTodo = (todoData: ITodoData) => {
	const { todos } = todoData;
	const lastTodo = todos.at(-1);
	const order_index = todos.length ? lastTodo.order_index + 1 : 0;

	const payload = {
		todo_id: crypto.randomUUID(),
		title_todo: "",
		checked: false,
		order_index,
	};
	return payload;
};

export { generateNewTodo };
