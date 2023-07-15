import CardNote from "./CardNote";
import DialogDeleteAllNotes from "./Dialogs/DialogDeleteAllNotes";
import DialogDeleteOneNote from "./Dialogs/DialogDeleteOneNote";
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
			<DialogDeleteOneNote />
			<DialogDeleteAllNotes />
		</>	
	);
};

export default NoteView;