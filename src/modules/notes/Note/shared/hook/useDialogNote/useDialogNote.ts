import { useNoteContext } from "modules/notes/Note/Context";
import { useCallback } from "react";
import { IUseDialogNote } from "./types";

const useDialogNote = (): IUseDialogNote => {
	const {
		setNoteID,
		setIsOpenDialogDeleteOneNote,
		setIsOpenDialogDeleteAllNotes,
	} = useNoteContext();

	const openDialogDeleteOneNote = useCallback((noteID: string) => {
		setIsOpenDialogDeleteOneNote(true);
		setNoteID(noteID);
	}, []);

	const closeDialogDeleteOneNote = useCallback(() => {
		setIsOpenDialogDeleteOneNote(false);
		setNoteID("");
	}, []);

	const openDialogDeleteAllNotes = useCallback(
		() => setIsOpenDialogDeleteAllNotes(true),
		[]
	);

	const closeDialogDeleteAllNotes = useCallback(
		() => setIsOpenDialogDeleteAllNotes(false),
		[]
	);

	return {
		openDialogDeleteOneNote,
		closeDialogDeleteOneNote,
		openDialogDeleteAllNotes,
		closeDialogDeleteAllNotes,
	};
};

export { useDialogNote };
