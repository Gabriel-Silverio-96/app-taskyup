import { renderHook } from "@testing-library/react";
import { useTextContext } from "modules/texts/Text/Context";
import { act } from "react-dom/test-utils";
import { useDialogText } from "../useDialogText";

jest.mock("modules/texts/Text/Context");

let setDialogDeleteOneText: jest.Mock;
let setDialogDeleteAllText: jest.Mock;

beforeEach(() => {
	setDialogDeleteOneText = jest.fn();
	setDialogDeleteAllText = jest.fn();

	(useTextContext as jest.Mock).mockReturnValue({
		setDialogDeleteOneText,
		setDialogDeleteAllText,
	});
});

afterEach(() => {
	jest.clearAllMocks();
});

describe("Custom hook useDialogText()", () => {
	it("should open dialog to delete one text and set text ID", () => {
		const { result } = renderHook(() => useDialogText());

		act(() => {
			result.current.openDialogDeleteOneText("123");
		});

		const expected = { open: true, textID: "123" };
		expect(setDialogDeleteOneText).toHaveBeenCalledWith(expected);
	});

	it("should close dialog to delete one text and clear text ID", () => {
		const { result } = renderHook(() => useDialogText());

		act(() => {
			result.current.closeDialogDeleteOneText();
		});

		const expected = { open: false, textID: "" };
		expect(setDialogDeleteOneText).toHaveBeenCalledWith(expected);
	});

	it("should open dialog to delete all texts and set board ID", () => {
		const { result } = renderHook(() => useDialogText());

		act(() => {
			result.current.openDialogDeleteAllTexts("123");
		});

		const expected = { open: true, boardID: "123" };
		expect(setDialogDeleteAllText).toHaveBeenCalledWith(expected);
	});

	it("should close dialog to delete all texts and clear board ID", () => {
		const { result } = renderHook(() => useDialogText());

		act(() => {
			result.current.closeDialogDeleteAllTexts();
		});

		const expected = { open: false, boardID: "" };
		expect(setDialogDeleteAllText).toHaveBeenCalledWith(expected);
	});
});
