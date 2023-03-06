import { useTheme } from "@mui/material";
import React, { memo } from "react";
import useDialogNote from "../shared/hook/useDialogNote";
import CardNoteView from "./CardNoteView";
import { ICardNote } from "./types/CardNote.component";

const CardNote: React.FC<ICardNote> = ({ data }) => {
	const { palette } = useTheme();	
	const { openDialogEditNote, openDialogDeleteSingleNote } = useDialogNote();

	return (
		<CardNoteView
			{...{
				palette,
				data,
				openDialogEditNote,
				openDialogDeleteSingleNote,
			}}
		/>
	);
};

export default memo(CardNote);
