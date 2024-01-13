import { renderHook, act } from "@testing-library/react";
import { useDispatch } from "react-redux";
import useSnackbar from "shared/common/hook/useSnackbar";
import {
	SNACKBAR_CLOSE_TYPE,
	SNACKBAR_OPEN_TYPE,
} from "shared/common/store/SnackBar/SnackBar.reducer";

jest.mock("react-redux", () => ({
	...jest.requireActual("react-redux"),
	useDispatch: jest.fn(),
}));

afterAll(() => {
	jest.resetAllMocks();
});

const TESTS_CASES = [
	["snackBarSuccess", "success", "Success!"],
	["snackBarError", "error", "Error!"],
	["snackBarInfo", "info", "Info!"],
	["snackBarWarning", "warning", "Warning!"],
];

describe("Hook useSnackbar()", () => {
	it.each(TESTS_CASES)(
		"Should dispatch %s action",
		(actionName, severity, message) => {
			const dispatchMock = jest.fn();
			(useDispatch as jest.Mock).mockReturnValue(dispatchMock);

			const { result } = renderHook(() => useSnackbar());

			act(() => {
				(
					result.current as {
						[key: string]: (props: { message: string }) => void;
					}
				)[actionName]({ message });
			});

			expect(dispatchMock).toHaveBeenCalledWith({
				type: SNACKBAR_OPEN_TYPE,
				payload: { open: true, severity, message },
			});
		}
	);

	it("Should dispatch snackBarClose action", () => {
		const dispatchMock = jest.fn();
		(useDispatch as jest.Mock).mockReturnValue(dispatchMock);

		const { result } = renderHook(() => useSnackbar());

		act(() => {
			result.current.snackBarClose();
		});

		expect(dispatchMock).toHaveBeenCalledWith({
			type: SNACKBAR_CLOSE_TYPE,
		});
	});
});
