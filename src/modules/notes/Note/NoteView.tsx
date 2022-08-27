import { Box } from "@mui/material";
import CardNote from "./CardNote";
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
		</Box>	
	);
};

export default NoteView;