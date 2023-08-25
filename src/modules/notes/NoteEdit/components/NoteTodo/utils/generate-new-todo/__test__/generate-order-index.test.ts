import { faker } from "@faker-js/faker";
import { ITodo } from "modules/notes/NoteEdit/types";
import { generateOrderIndex } from "../generate-order-index";

describe("Function generateOrderIndex", () => {
	it("Should generate the correct order_index", () => {
		const MOCK_UUID = faker.datatype.uuid();

		const todos: Array<ITodo> = [
			{
				todo_id: MOCK_UUID,
				title_todo: faker.lorem.lines(),
				created_at: faker.datatype.datetime(),
				checked: false,
				order_index: 0,
			},
			{
				todo_id: MOCK_UUID,
				title_todo: faker.lorem.lines(),
				created_at: faker.datatype.datetime(),
				checked: false,
				order_index: 1,
			},
			{
				todo_id: MOCK_UUID,
				title_todo: faker.lorem.lines(),
				created_at: faker.datatype.datetime(),
				checked: false,
				order_index: 2,
			},
		];

		const result = generateOrderIndex(todos);

		expect(result).toEqual(3);
	});

	it("Should generate zero as the first order_index", () => {
		const todos: Array<any> = [];

		const result = generateOrderIndex(todos);

		expect(result).toEqual(0);
	});
});
