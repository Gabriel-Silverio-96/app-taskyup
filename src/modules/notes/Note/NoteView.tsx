import CardNote from "./CardNote";
import DialogDeleteAllNotes from "./DialogDeleteAllNotes";
import DialogDeleteSingleNote from "./Dialogs/DialogDeleteSingleNote";
import DialogEditNote from "./Dialogs/DialogEditNote";
import DialogNewNote from "./Dialogs/DialogNewNote";
import HeaderNote from "./HeaderNote";

const NoteView = () => {
	return (
		<>
			<HeaderNote />
			<CardNote />
			<DialogNewNote />
			<DialogEditNote />
			<DialogDeleteSingleNote />
			<DialogDeleteAllNotes />
		</>	
	);
};

export default NoteView;