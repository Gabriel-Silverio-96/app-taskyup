import { Box } from "@mui/material";
import React from "react";
import CardBoard from "./CardBoard";
import DialogEditBoard from "./DialogEditBoard";

const BoardView: React.FC = () => {
	return (
		<Box component="section" sx={{ flexGrow: 1, p: 3 }}>
			<CardBoard />	
			<DialogEditBoard />	
		</Box>		 
	);
};

export default BoardView;