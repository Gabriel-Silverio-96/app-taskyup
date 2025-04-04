import { renderHook, act } from "@testing-library/react";
import { useDispatch } from "react-redux";
import useSnackbar from "shared/common/hooks/useSnackbar";
import {
	SNACKBAR_CLOSE_TYPE,
	SNACKBAR_OPEN_TYPE,
} from "shared/common/store/Snackbar/Snackbar.reducer";

jest.mock("react-redux", () => ({
	...jest.requireActual("react-redux"),
	useDispatch: jest.fn(),
}));

afterAll(() => {
	jest.resetAllMocks();
});

const TESTS_CASES = [
	["snackbarSuccess", "success", "Success!"],
	["snackbarError", "error", "Error!"],
	["snackbarInfo", "info", "Info!"],
	["snackbarWarning", "warning", "Warning!"],
];

interface CurrentRenderHook {
	[key: string]: (props: { message: string }) => void;
}

describe("Hook useSnackbar()", () => {
	it.each(TESTS_CASES)(
		"Should dispatch %s action",
		(actionName, severity, message) => {
			const dispatchMock = jest.fn();
			(useDispatch as jest.Mock).mockReturnValue(dispatchMock);

			const { result } = renderHook(() => useSnackbar());

			act(() => {
				const action = result.current as CurrentRenderHook;
				action[actionName]({ message });
			});

			expect(dispatchMock).toHaveBeenCalledWith({
				type: SNACKBAR_OPEN_TYPE,
				payload: { open: true, severity, message },
			});
		}
	);

	it("Should dispatch snackbarClose action", () => {
		const dispatchMock = jest.fn();
		(useDispatch as jest.Mock).mockReturnValue(dispatchMock);

		const { result } = renderHook(() => useSnackbar());

		act(() => {
			result.current.snackbarClose();
		});

		expect(dispatchMock).toHaveBeenCalledWith({
			type: SNACKBAR_CLOSE_TYPE,
		});
	});
});
