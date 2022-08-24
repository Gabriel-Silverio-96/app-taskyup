import { Box } from "@mui/material";
import React from "react";
import CardNote from "./CardNote";
import HeaderNote from "./HeaderNote";

const NoteView = () => {
	return (
		<Box component="section" sx={{ flexGrow: 1, p: 3 }}>
			<HeaderNote />
			<CardNote />
		</Box>	
	);
};

export default NoteView;