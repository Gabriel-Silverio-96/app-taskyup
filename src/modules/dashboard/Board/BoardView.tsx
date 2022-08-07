import { Box } from "@mui/material";
import React from "react";
import CardBoard from "./CardBoard";

const BoardView: React.FC = () => {
	return (
		<Box component="section" sx={{ flexGrow: 1, p: 3 }}>
			<CardBoard />		
		</Box>		 
	);
};

export default BoardView;