import { ITodoData, ITodo } from "modules/notes/NoteEdit/types";

const todoDeleteById = (todoData: ITodoData, todo_id: string) =>
	todoData.todos.filter((todo: ITodo) => todo.todo_id !== todo_id);

export { todoDeleteById };
