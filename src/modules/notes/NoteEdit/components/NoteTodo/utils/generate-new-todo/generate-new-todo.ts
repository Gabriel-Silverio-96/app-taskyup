import { ITodoData } from "modules/notes/NoteEdit/types";
import { generateOrderIndex } from "./generate-order-index";

const generateNewTodo = (todoData: ITodoData) => {
	const { todos } = todoData;
	const order_index = generateOrderIndex(todos);

	return {
		todo_id: crypto.randomUUID(),
		title_todo: "",
		checked: false,
		order_index,
	};
};

export { generateNewTodo };
