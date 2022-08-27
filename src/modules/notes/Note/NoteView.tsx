import { Box } from "@mui/material";
import CardNote from "./CardNote";
import DialogNewNote from "./DialogNewNote";
import HeaderNote from "./HeaderNote";

const NoteView = () => {
	return (
		<Box component="section" sx={{ flexGrow: 1, p: 3 }}>
			<HeaderNote />
			<CardNote />
			<DialogNewNote />
		</Box>	
	);
};

export default NoteView;