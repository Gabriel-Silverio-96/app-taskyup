import { useLocation } from "react-router-dom";
import useLocalStorage from "shared/common/hooks/useLocalStorage";
import { renderHook, act } from "@testing-library/react";
import { useLatestAccess } from "shared/common/hooks/useLatestAccess/useLatestAccess";
import { PAGE_MOCK } from "shared/common/hooks/useLatestAccess/__test__/mock/";
import { faker } from "@faker-js/faker";

jest.mock("shared/common/hooks/useLocalStorage");
jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useLocation: jest.fn(),
}));

const setStorage = jest.fn();

beforeEach(() => {
	(useLocalStorage as jest.Mock).mockReturnValue([[], setStorage]);
	(useLocation as jest.Mock).mockReturnValue({
		pathname: "/board",
		search: "?id=1",
	});
	setStorage.mockClear();
});

afterEach(() => jest.clearAllMocks());

describe("Hook useLatestAccess()", () => {
	it("Should add a new latest access", () => {
		const { result } = renderHook(() => useLatestAccess());

		act(() => {
			result.current.addLatestAccess(PAGE_MOCK);
		});

		const [[updateFn]] = setStorage.mock.calls;
		const updatedStorage = updateFn([]);

		expect(updatedStorage).toEqual([{ ...PAGE_MOCK, path: "/board?id=1" }]);
	});

	it("Should edit a latest access title", () => {
		const storaged = [{ ...PAGE_MOCK, path: "/board?id=1" }];
		(useLocalStorage as jest.Mock).mockReturnValue([storaged, setStorage]);

		const { result } = renderHook(() => useLatestAccess());
		const newTitle = faker.lorem.word(5);

		act(() => {
			result.current.editLatestAccess({
				id: PAGE_MOCK.id,
				title: newTitle,
			});
		});

		const [[updateFn]] = setStorage.mock.calls;
		const [updated] = updateFn(storaged);

		expect(updated.title).toBe(newTitle);
	});

	it("Should delete a latest access by id", () => {
		const storaged = [PAGE_MOCK];
		(useLocalStorage as jest.Mock).mockReturnValue([storaged, setStorage]);

		const { result } = renderHook(() => useLatestAccess());

		act(() => {
			result.current.deleteLatestAccess({ id: PAGE_MOCK.id });
		});

		const [[updateFn]] = setStorage.mock.calls;
		const updated = updateFn(storaged);

		expect(updated).toHaveLength(0);
	});
});
