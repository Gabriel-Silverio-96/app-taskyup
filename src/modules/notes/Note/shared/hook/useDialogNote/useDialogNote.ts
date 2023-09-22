import { useContextNote } from "modules/notes/Note/Context";
import { useCallback } from "react";
import { IUseDialogNote } from "./types";

const useDialogNote = (): IUseDialogNote => {
	const {
		setIsOpenDialogEditNote,
		setNoteID,
		setIsOpenDialogDeleteOneNote,
		setIsOpenDialogDeleteAllNotes,
	} = useContextNote();

	const openDialogEditNote = useCallback((noteID: string) => {
		setIsOpenDialogEditNote(true);
		setNoteID(noteID);
	}, []);

	const closeDialogEditNote = useCallback(() => {
		setIsOpenDialogEditNote(false);
		setNoteID("");
	}, []);

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
		openDialogEditNote,
		closeDialogEditNote,
		openDialogDeleteOneNote,
		closeDialogDeleteOneNote,
		openDialogDeleteAllNotes,
		closeDialogDeleteAllNotes,
	};
};
export { useDialogNote };
