import { ITodos } from "modules/notes/NoteEdit/types";
import { IEditCheckboxValue, IUpdatedTodos } from "./types";

const updatedTodos: IUpdatedTodos = ({ todos, todo_id, checked }) =>
	todos.map((todo: ITodos) => {
		const isSameTodoId = todo.todo_id === todo_id;

		if (isSameTodoId) return { ...todo, checked };

		return todo;
	});

const editCheckboxValue: IEditCheckboxValue = ({
	todoData,
	todo_id,
	checked,
}) => {
	const { todos } = todoData;
	return updatedTodos({ todos, checked, todo_id });
};

export { editCheckboxValue };
