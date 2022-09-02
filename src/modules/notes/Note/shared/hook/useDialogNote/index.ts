import { useContextNote } from "modules/notes/Note/Context";
import { useCallback } from "react";
import { IUseDialogNote } from "./types/UseDialogNote";

const useDialogNote = (): IUseDialogNote => {
	const {
		setIsOpenDialogNewNote,
		setIsOpenDialogEditNote,
		setNoteID,
		setIsOpenDialogDeleteSingleNote,
		setIsOpenDialogDeleteAllNotes,
	} = useContextNote();

	const openDialogNewNote = () => setIsOpenDialogNewNote(true);
	const closeDialogNewNote = () => setIsOpenDialogNewNote(false);

	const openDialogEditNote = (noteID: string) => {
		setIsOpenDialogEditNote(true);
		setNoteID(noteID);
	};

	const closeDialogEditNote = () => {
		setIsOpenDialogEditNote(false);
		setNoteID("");
	};

	const openDialogDeleteSingleNote = (noteID: string) => {
		setIsOpenDialogDeleteSingleNote(true);
		setNoteID(noteID);
	};

	const closeDialogDeleteSingleNote = () => {
		setIsOpenDialogDeleteSingleNote(false);
		setNoteID("");
	};

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
		closeDialogDeleteAllNotes
	};
};
export default useDialogNote;
