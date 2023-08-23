import { ITodoData } from "modules/notes/NoteEdit/types";

const generateNewTodo = (todoData: ITodoData) => {
	const { todos } = todoData;
	const lastTodo = todos.at(-1);
	const order = todos.length ? lastTodo.order + 1 : 0;

	const payload = {
		todo_id: crypto.randomUUID(),
		title_todo: "",
		checked: false,
		order,
	};
	return payload;
};

export { generateNewTodo };
