import { ITodos } from "modules/notes/NoteEdit/types";
import { ITodoEditCheckboxValue, IUpdatedTodos } from "./types";

const updatedTodos: IUpdatedTodos = ({ todos, todo_id, checked }) =>
	todos.map((todo: ITodos) => {
		const isSameTodoId = todo.todo_id === todo_id;

		if (isSameTodoId) return { ...todo, checked };

		return todo;
	});

const todoEditCheckboxValue: ITodoEditCheckboxValue = ({
	todoData,
	todo_id,
	checked,
}) => {
	const { todos } = todoData;
	return updatedTodos({ todos, checked, todo_id });
};

export { todoEditCheckboxValue };
