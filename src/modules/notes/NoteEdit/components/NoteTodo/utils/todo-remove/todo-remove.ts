import { ITodoData } from "modules/notes/NoteEdit/types";

const todoRemove = (todoData: ITodoData, todo_id: string) =>
	todoData.todos.filter((todo: any) => todo.todo_id !== todo_id);

export { todoRemove };
