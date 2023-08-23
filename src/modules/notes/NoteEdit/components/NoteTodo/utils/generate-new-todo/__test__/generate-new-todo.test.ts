import { faker } from "@faker-js/faker";
import { generateNewTodo } from "../generate-new-todo";

const MOCK_UUID = faker.datatype.uuid();

beforeEach(() => {
	const mockFunctionRandomUUID: jest.Mock<string> = jest.fn(() => MOCK_UUID);
	(window as any).crypto = { randomUUID: mockFunctionRandomUUID };
});

afterAll(() => {
	jest.resetModules();
	(window as any).crypto = undefined;
});

describe("Function generateNewTodo", () => {
	it("Should generate a new todo", () => {
		const todoData = {
			count: 1,
			todos: [{ todo_id: faker.datatype.uuid(), order_index: 0 }],
		};

		const result = generateNewTodo(todoData);

		const expected = {
			todo_id: MOCK_UUID,
			title_todo: "",
			checked: false,
			order_index: 1,
		};

		expect(result).toEqual(expected);
	});

	it("Should generate a new todo with zero order_index when the todo array is empty", () => {
		const todoData = {
			count: 1,
			todos: [],
		};

		const result = generateNewTodo(todoData);

		const expected = {
			todo_id: MOCK_UUID,
			title_todo: "",
			checked: false,
			order_index: 0,
		};

		expect(result).toEqual(expected);
	});
});
