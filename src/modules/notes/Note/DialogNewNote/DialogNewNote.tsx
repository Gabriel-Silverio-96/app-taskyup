import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import DialogNewNoteView from "./DialogNewNoteView";

const DialogNewNote: React.FC = () => {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	return <DialogNewNoteView {...{ fullScreen }}/>;
};

export default DialogNewNote;