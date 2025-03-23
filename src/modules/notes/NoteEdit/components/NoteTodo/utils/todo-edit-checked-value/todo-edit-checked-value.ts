import type { ITodo } from "modules/notes/NoteEdit/types";
import type {
	ITodoEditCheckedValue,
	IEditCheckedValue,
} from "modules/notes/NoteEdit/components/NoteTodo/utils/todo-edit-checked-value/types";

const editCheckedValue: IEditCheckedValue = ({ todos, todo_id, checked }) =>
	todos.map((todo: ITodo) => {
		const isSameTodoId = todo.todo_id === todo_id;

		if (isSameTodoId) return { ...todo, checked };

		return todo;
	});

const todoEditCheckedValue: ITodoEditCheckedValue = ({
	todoData,
	todo_id,
	checked,
}) => {
	const { todos } = todoData;
	return editCheckedValue({ todos, checked, todo_id });
};

export { todoEditCheckedValue };
