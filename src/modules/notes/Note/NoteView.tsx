import { Box } from "@mui/material";
import React from "react";
import HeaderNote from "./HeaderNote";

const NoteView: React.FC<any> = () => {
	return (
		<Box component="section" sx={{ flexGrow: 1, p: 3 }}>
			<HeaderNote />
		</Box>	
	);
};

export default NoteView;