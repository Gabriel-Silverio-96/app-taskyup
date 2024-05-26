import { renderHook } from "@testing-library/react";
import { useContextBoard } from "modules/dashboard/Board/Context";
import { act } from "react-dom/test-utils";
import { useDialogBoard } from "../useDialogBoard";

jest.mock("modules/dashboard/Board/Context", () => ({
	useContextBoard: jest.fn(),
}));

let setBoardIDMock: jest.Mock<any, any>;
let setIsOpenDialogEditBoardMock: jest.Mock<any, any>;
let setIsOpenDialogDeleteOneBoardMock: jest.Mock<any, any>;

beforeEach(() => {
	setBoardIDMock = jest.fn();
	setIsOpenDialogEditBoardMock = jest.fn();
	setIsOpenDialogDeleteOneBoardMock = jest.fn();

	(useContextBoard as jest.Mock).mockReturnValue({
		setBoardID: setBoardIDMock,
		setIsOpenDialogEditBoard: setIsOpenDialogEditBoardMock,
		setIsOpenDialogDeleteOneBoard: setIsOpenDialogDeleteOneBoardMock,
	});
});

afterEach(() => {
	jest.clearAllMocks();
});

describe("Custom hook useDialogBoard()", () => {
	it("should open edit board dialog and close menu", () => {
		const { result } = renderHook(() => useDialogBoard());
		const closeMenuMock = jest.fn();

		act(() => {
			result.current.openDialogEditBoard(closeMenuMock);
		});

		expect(setIsOpenDialogEditBoardMock).toHaveBeenCalledWith(true);
		expect(closeMenuMock).toHaveBeenCalled();
	});

	it("should close edit board dialog and reset board ID", () => {
		const { result } = renderHook(() => useDialogBoard());

		act(() => {
			result.current.closeDialogEditBoard();
		});

		expect(setIsOpenDialogEditBoardMock).toHaveBeenCalledWith(false);
		expect(setBoardIDMock).toHaveBeenCalledWith("");
	});

	it("should open delete board dialog and close menu", () => {
		const { result } = renderHook(() => useDialogBoard());
		const closeMenuMock = jest.fn();

		act(() => {
			result.current.openDialogDeleteOneBoard(closeMenuMock);
		});

		expect(setIsOpenDialogDeleteOneBoardMock).toHaveBeenCalledWith(true);
		expect(closeMenuMock).toHaveBeenCalled();
	});

	it("should close delete board dialog and reset board ID", () => {
		const { result } = renderHook(() => useDialogBoard());

		act(() => {
			result.current.closeDialogDeleteOneBoard();
		});

		expect(setIsOpenDialogDeleteOneBoardMock).toHaveBeenCalledWith(false);
		expect(setBoardIDMock).toHaveBeenCalledWith("");
	});
});
