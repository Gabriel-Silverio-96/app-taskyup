import CardNote from "./components/CardNote";
import DialogDeleteAllNotes from "./components/Dialogs/DialogDeleteAllNotes";
import DialogDeleteOneNote from "./components/Dialogs/DialogDeleteOneNote";
import HeaderNote from "./components/HeaderNote";

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
