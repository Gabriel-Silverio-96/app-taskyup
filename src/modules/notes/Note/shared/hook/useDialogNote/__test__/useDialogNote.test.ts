import { renderHook } from "@testing-library/react";
import { useContextNote } from "modules/notes/Note/Context";
import { act } from "react-dom/test-utils";
import { useDialogNote } from "../useDialogNote";

jest.mock("modules/notes/Note/Context", () => ({
	useContextNote: jest.fn(),
}));

let setNoteID: jest.Mock;
let setIsOpenDialogDeleteOneNote: jest.Mock;
let setIsOpenDialogDeleteAllNotes: jest.Mock;

beforeEach(() => {
	setNoteID = jest.fn();
	setIsOpenDialogDeleteOneNote = jest.fn();
	setIsOpenDialogDeleteAllNotes = jest.fn();

	(useContextNote as jest.Mock).mockReturnValue({
		setNoteID,
		setIsOpenDialogDeleteOneNote,
		setIsOpenDialogDeleteAllNotes,
	});
});

afterEach(() => {
	jest.clearAllMocks();
});

describe("Custom hook useDialogNote()", () => {
	it("should open dialog to delete one note and set note ID", () => {
		const { result } = renderHook(() => useDialogNote());

		act(() => {
			result.current.openDialogDeleteOneNote("123");
		});

		expect(setIsOpenDialogDeleteOneNote).toHaveBeenCalledWith(true);
		expect(setNoteID).toHaveBeenCalledWith("123");
	});

	it("should close dialog to delete one note and clear note ID", () => {
		const { result } = renderHook(() => useDialogNote());

		act(() => {
			result.current.closeDialogDeleteOneNote();
		});

		expect(setIsOpenDialogDeleteOneNote).toHaveBeenCalledWith(false);
		expect(setNoteID).toHaveBeenCalledWith("");
	});

	it("should open dialog to delete all notes", () => {
		const { result } = renderHook(() => useDialogNote());

		act(() => {
			result.current.openDialogDeleteAllNotes();
		});

		expect(setIsOpenDialogDeleteAllNotes).toHaveBeenCalledWith(true);
	});

	it("should close dialog to delete all notes", () => {
		const { result } = renderHook(() => useDialogNote());

		act(() => {
			result.current.closeDialogDeleteAllNotes();
		});

		expect(setIsOpenDialogDeleteAllNotes).toHaveBeenCalledWith(false);
	});
});
