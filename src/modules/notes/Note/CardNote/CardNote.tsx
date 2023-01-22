import { useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { useContextNote } from "../Context";
import useDialogNote from "../shared/hook/useDialogNote";
import CardNoteView from "./CardNoteView";
import fetchNotes from "./service";

const CardNote: React.FC = () => {
	const { board_id } = useParams();
	const { setTotalOfNotes } = useContextNote();
	const { palette } = useTheme();	
	const { openDialogEditNote, openDialogDeleteSingleNote } = useDialogNote();
	
	const queryKey = ["notes", { variable: board_id }];
	const onSuccess = ({ list_notes }: any) => setTotalOfNotes(list_notes.length);
	
	const { data, isFetching } = useQuery(queryKey, () => fetchNotes(board_id), { onSuccess });

	return (
		<CardNoteView
			{...{
				palette,
				data,
				isFetching,
				openDialogEditNote,
				openDialogDeleteSingleNote,
			}}
		/>
	);
};

export default memo(CardNote);
