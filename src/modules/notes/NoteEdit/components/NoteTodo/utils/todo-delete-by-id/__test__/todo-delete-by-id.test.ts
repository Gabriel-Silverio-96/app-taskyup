import { faker } from "@faker-js/faker";
import { ITodoData, ITodo } from "modules/notes/NoteEdit/types";
import { todoDeleteById } from "../todo-delete-by-id";

const TODO_ID_TO_DELETE = faker.datatype.uuid();

const todoData: ITodoData = {
	count: 2,
	todos: [
		{
			todo_id: TODO_ID_TO_DELETE,
			related_id: faker.datatype.uuid(),
			title_todo: faker.lorem.lines(),
			created_at: faker.datatype.datetime(),
			checked: false,
		},
		{
			todo_id: faker.datatype.uuid(),
			related_id: faker.datatype.uuid(),
			title_todo: faker.lorem.lines(),
			created_at: faker.datatype.datetime(),
			checked: false,
		},
	],
};

describe("Function todoDeleteById()", () => {
	it("Should delete todo of a specific 'todo_id'", () => {
		const result = todoDeleteById(todoData, TODO_ID_TO_DELETE);

		const wasFoundTodo: ITodo = result.find(
			({ todo_id }) => todo_id === TODO_ID_TO_DELETE
		);

		expect(wasFoundTodo).toBeUndefined();
	});
});
