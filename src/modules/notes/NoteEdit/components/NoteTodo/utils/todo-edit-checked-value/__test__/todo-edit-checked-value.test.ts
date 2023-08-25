import { faker } from "@faker-js/faker";
import { ITodoData, ITodo } from "modules/notes/NoteEdit/types";
import { todoEditCheckedValue } from "../todo-edit-checked-value";

const TODO_ID_TO_EDIT = faker.datatype.uuid();

const todoData: ITodoData = {
	count: 2,
	todos: [
		{
			todo_id: TODO_ID_TO_EDIT,
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
			todo_id: TODO_ID_TO_EDIT,
			checked: true,
		});

		const todoEdited: ITodo = result.find(
			({ todo_id }) => todo_id === TODO_ID_TO_EDIT
		);

		const todoNotEdited: ITodo = result.find(
			({ todo_id }) => todo_id !== TODO_ID_TO_EDIT
		);

		expect(todoEdited.checked).toBeTruthy();
		expect(todoNotEdited.checked).toBeFalsy();
	});
});
