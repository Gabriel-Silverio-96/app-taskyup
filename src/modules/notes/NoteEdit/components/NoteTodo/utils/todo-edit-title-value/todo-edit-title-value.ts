import type { ITodo } from "modules/notes/NoteEdit/types";
import type {
	IEditTitleTodoValue,
	ITodoEditTitleValue,
} from "modules/notes/NoteEdit/components/NoteTodo/utils/todo-edit-title-value/types";

const editTitleTodoValue: IEditTitleTodoValue = ({ todos, todo_id, value }) =>
	todos.map((todo: ITodo) => {
		const isSameTodoId = todo.todo_id === todo_id;

		if (isSameTodoId) return { ...todo, title_todo: value };
		return todo;
	});

const todoEditTitleValue: ITodoEditTitleValue = ({
	todoData,
	todo_id,
	value,
}) => {
	const { todos } = todoData;
	return editTitleTodoValue({ todos, todo_id, value });
};

export { todoEditTitleValue };
