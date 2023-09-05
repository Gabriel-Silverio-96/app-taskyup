import { useContextNote } from "modules/notes/Note/Context";
import { useCallback } from "react";
import { IUseDialogNote } from "./types";

const useDialogNote = (): IUseDialogNote => {
	const {
		setIsOpenDialogNewNote,
		setIsOpenDialogEditNote,
		setNoteID,
		setIsOpenDialogDeleteSingleNote,
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

	const openDialogDeleteSingleNote = useCallback((noteID: string) => {
		setIsOpenDialogDeleteSingleNote(true);
		setNoteID(noteID);
	}, []);

	const closeDialogDeleteSingleNote = useCallback(() => {
		setIsOpenDialogDeleteSingleNote(false);
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
		openDialogDeleteSingleNote,
		closeDialogDeleteSingleNote,
		openDialogDeleteAllNotes,
		closeDialogDeleteAllNotes,
	};
};
export { useDialogNote };
