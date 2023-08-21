import { faker } from "@faker-js/faker";
import { ITodoData, ITodos } from "modules/notes/NoteEdit/types";
import { todoEditTitleValue } from "../todo-edit-title-value";

const todo_id_to_edited = faker.datatype.uuid();

const todoData: ITodoData = {
	count: 2,
	todos: [
		{
			todo_id: todo_id_to_edited,
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

describe("Function todoEditTitleValue()", () => {
	it("Should edit the 'title_todo' value of a specific 'todo_id'", () => {
		const value = faker.lorem.lines();

		const result = todoEditTitleValue({
			todoData,
			todo_id: todo_id_to_edited,
			value,
		});

		const todoEdited: ITodos = result.find(
			({ todo_id }) => todo_id === todo_id_to_edited
		);

		const todoNotEdited: ITodos = result.find(
			({ todo_id }) => todo_id !== todo_id_to_edited
		);
		expect(todoEdited.title_todo).toBe(value);
		expect(todoNotEdited.title_todo).not.toBe(value);
	});
});
