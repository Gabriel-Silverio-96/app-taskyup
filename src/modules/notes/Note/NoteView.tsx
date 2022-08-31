import { Box } from "@mui/material";
import CardNote from "./CardNote";
import DialogDeleteSingleNote from "./DialogDeleteSingleNote";
import DialogEditNote from "./DialogEditNote";
import DialogNewNote from "./DialogNewNote";
import HeaderNote from "./HeaderNote";

const NoteView = () => {
	return (
		<Box component="section" sx={{ flexGrow: 1, p: 3 }}>
			<HeaderNote />
			<CardNote />
			<DialogNewNote />
			<DialogEditNote />
			<DialogDeleteSingleNote />
		</Box>	
	);
};

export default NoteView;