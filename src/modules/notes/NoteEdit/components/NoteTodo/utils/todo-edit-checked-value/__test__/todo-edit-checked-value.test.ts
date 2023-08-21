import { faker } from "@faker-js/faker";
import { ITodoData, ITodos } from "modules/notes/NoteEdit/types";
import { todoEditCheckedValue } from "../todo-edit-checked-value";

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

describe("Function todoEditCheckedValue()", () => {
	it("Should edit the checked value of a specific 'todo_id'", () => {
		const result = todoEditCheckedValue({
			todoData,
			todo_id: todo_id_to_edited,
			checked: true,
		});

		const todoEdited: ITodos = result.find(
			({ todo_id }) => todo_id === todo_id_to_edited
		);

		const todoNotEdited: ITodos = result.find(
			({ todo_id }) => todo_id !== todo_id_to_edited
		);

		expect(todoEdited.checked).toBeTruthy();
		expect(todoNotEdited.checked).toBeFalsy();
	});
});
