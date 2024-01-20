import { faker } from "@faker-js/faker";
import { act, renderHook } from "@testing-library/react";
import useLocalStorage from "shared/common/hook/useLocalStorage/useLocalStorage";

const KEY_LOCAL_STORAGE = faker.lorem.word(5);
const INITIAL_VALUE_LOCAL_STORAGE = faker.lorem.words();

describe("Hook useLocalStorage()", () => {
	beforeEach(() => {
		localStorage.clear();
	});

	it("Should return initialState when localStorage is empty", () => {
		const { result } = renderHook(() =>
			useLocalStorage(KEY_LOCAL_STORAGE, INITIAL_VALUE_LOCAL_STORAGE)
		);

		const [hookValue] = result.current;
		expect(hookValue).toBe(INITIAL_VALUE_LOCAL_STORAGE);
	});

	it("Should return value from localStorage when it exists", () => {
		const STORED_VALUE = "storedValue";
		localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(STORED_VALUE));

		const { result } = renderHook(() =>
			useLocalStorage(KEY_LOCAL_STORAGE, INITIAL_VALUE_LOCAL_STORAGE)
		);

		const [hookValue] = result.current;
		expect(hookValue).toBe(STORED_VALUE);
	});

	it("Should update localStorage when setState is called", () => {
		const NEW_VALUE = "newValue";
		const { result } = renderHook(() =>
			useLocalStorage(KEY_LOCAL_STORAGE, INITIAL_VALUE_LOCAL_STORAGE)
		);

		act(() => {
			const [, dispatchSetState] = result.current;
			dispatchSetState(NEW_VALUE);
		});

		const expected = JSON.parse(
			localStorage.getItem(KEY_LOCAL_STORAGE) || ""
		);
		expect(expected).toBe(NEW_VALUE);
	});
});
