import CardNote from "./CardNote";
import DialogDeleteAllNotes from "./Dialogs/DialogDeleteAllNotes";
import DialogDeleteOneNote from "./Dialogs/DialogDeleteOneNote";
import HeaderNote from "./HeaderNote";

const NoteView = () => {
	return (
		<>
			<HeaderNote />
			<CardNote />
			<DialogDeleteOneNote />
			<DialogDeleteAllNotes />
		</>	
	);
};

export default NoteView;