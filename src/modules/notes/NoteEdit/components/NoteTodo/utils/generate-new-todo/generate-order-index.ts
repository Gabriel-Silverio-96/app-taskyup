import { ITodoData } from "modules/notes/NoteEdit/types";

const generateOrderIndex = (todoData: ITodoData) => {
	const { todos } = todoData;
	const lastTodo = todos.at(-1);
	const orderIndex = todos.length ? lastTodo.order_index + 1 : 0;

	return orderIndex;
};

export { generateOrderIndex };
