import { useContextNote } from "modules/notes/Note/Context";
import { IUseDialogNote } from "./types/UseDialogNote";

const useDialogNote = (): IUseDialogNote => {
	const { setIsOpenDialogNewNote } = useContextNote();

	const openDialogNewNote = () => setIsOpenDialogNewNote(true);
	const closeDialogNewNote = () => setIsOpenDialogNewNote(false);

	return {
		openDialogNewNote,
		closeDialogNewNote,
	};
};
export default useDialogNote;
