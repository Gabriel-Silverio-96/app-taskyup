import CardNote from "./CardNote";
import DialogDeleteAllNotes from "./DialogDeleteAllNotes";
import DialogDeleteSingleNote from "./DialogDeleteSingleNote";
import DialogEditNote from "./DialogEditNote";
import DialogNewNote from "./DialogNewNote";
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