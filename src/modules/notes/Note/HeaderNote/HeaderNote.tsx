import { useMediaQuery, useTheme } from "@mui/material";
import React, { memo } from "react";
import useDialogNote from "../shared/hook/useDialogNote";
import HeaderNoteView from "./HeaderNoteView";
import { IHeaderNote } from "./types/HeaderNote.component";

const HeaderNote: React.FC<IHeaderNote> = ({ data }) => {
	const { openDialogNewNote, openDialogDeleteAllNotes } = useDialogNote();
	
	const { breakpoints } = useTheme();
	const isMediumScreen = useMediaQuery(breakpoints.down("md"));

	const openDialogDeleteAllNotesAndCloseMenu = () => openDialogDeleteAllNotes();
	const isDisabledIconButtonTrash = data && data?.total_notes > 0;

	return (
		<HeaderNoteView
			{...{
				data,
				openDialogNewNote, 
				openDialogDeleteAllNotesAndCloseMenu, 
				isMediumScreen,
				isDisabledIconButtonTrash
			}}
		/>
	);
};

export default memo(HeaderNote);
