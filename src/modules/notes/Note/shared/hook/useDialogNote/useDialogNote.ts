import { useContextNote } from "modules/notes/Note/Context";
import { useCallback } from "react";
import { IUseDialogNote } from "./types";

const useDialogNote = (): IUseDialogNote => {
	const {
		setIsOpenDialogNewNote,
		setIsOpenDialogEditNote,
		setNoteID,
		setIsOpenDialogDeleteOneNote,
		setIsOpenDialogDeleteAllNotes,
	} = useContextNote();

	const openDialogNewNote = useCallback(
		() => setIsOpenDialogNewNote(true),
		[]
	);
	const closeDialogNewNote = useCallback(
		() => setIsOpenDialogNewNote(false),
		[]
	);

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
		openDialogNewNote,
		closeDialogNewNote,
		openDialogEditNote,
		closeDialogEditNote,
		openDialogDeleteOneNote,
		closeDialogDeleteOneNote,
		openDialogDeleteAllNotes,
		closeDialogDeleteAllNotes,
	};
};
export { useDialogNote };
