import { useContextNote } from "modules/notes/Note/Context";
import { IUseDialogNote } from "./types/UseDialogNote";

const useDialogNote = (): IUseDialogNote => {
	const { setIsOpenDialogNewNote, setIsOpenDialogEditNote, setNoteID } = useContextNote();

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

	return {
		openDialogNewNote,
		closeDialogNewNote,
		openDialogEditNote,
		closeDialogEditNote
	};
};
export default useDialogNote;
