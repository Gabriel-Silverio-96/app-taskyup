import { useContextNote } from "modules/notes/Note/Context";
import { IUseDialogNote } from "./types/UseDialogNote";

const useDialogNote = (): IUseDialogNote => {
	const { setIsOpenDialogNewNote, setIsOpenDialogEditNote, setNoteID, setIsOpenDialogDeleteSingleNote } = useContextNote();

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

	return {
		openDialogNewNote,
		closeDialogNewNote,
		openDialogEditNote,
		closeDialogEditNote,
		openDialogDeleteSingleNote,
		closeDialogDeleteSingleNote
	};
};
export default useDialogNote;
