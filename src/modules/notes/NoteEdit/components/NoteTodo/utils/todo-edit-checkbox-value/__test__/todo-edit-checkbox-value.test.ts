import { faker } from "@faker-js/faker";
import { ITodoData } from "modules/notes/NoteEdit/types";
import { todoEditCheckboxValue } from "../todo-edit-checkbox-value";

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

describe("Function todoEditCheckboxValue()", () => {
	it("Should edit the checkbox value of a specific 'todo_id'", () => {
		const result = todoEditCheckboxValue({
			todoData,
			todo_id: todo_id_to_edited,
			checked: true,
		});

		const { checked } = result.find(
			({ todo_id }) => todo_id === todo_id_to_edited
		);

		expect(checked).toBeTruthy();
	});
});
