import { ITodoData } from "modules/notes/NoteEdit/types";
import { generateOrderIndex } from "../generate-order-index";
import { faker } from "@faker-js/faker";

describe("Function generateOrderIndex", () => {
	it("Should generate the correct order_index", () => {
		const MOCK_UUID = faker.datatype.uuid();

		const todoData: ITodoData = {
			count: 3,
			todos: [
				{ todo_id: MOCK_UUID, order_index: 0 },
				{ todo_id: MOCK_UUID, order_index: 1 },
				{ todo_id: MOCK_UUID, order_index: 2 },
			],
		};

		const result = generateOrderIndex(todoData);

		expect(result).toEqual(3);
	});

	it("Should generate zero as the first order_index", () => {
		const todoData: ITodoData = {
			count: 0,
			todos: [],
		};

		const result = generateOrderIndex(todoData);

		expect(result).toEqual(0);
	});
});
