import { useMediaQuery, useTheme } from "@mui/material";
import React, { memo } from "react";
import DialogNewBoardView from "./DialogNewBoardView";

const DialogNewBoard: React.FC = () => {
	const theme = useTheme();	
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
	
	return <DialogNewBoardView  {...{ fullScreen }} />;
};

export default memo(DialogNewBoard);