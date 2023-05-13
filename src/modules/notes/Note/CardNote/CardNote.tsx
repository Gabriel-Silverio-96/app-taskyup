import { useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { useContextNote } from "../Context";
import useDialogNote from "../shared/hook/useDialogNote";
import CardNoteView from "./CardNoteView";
import fetchNotes from "./service";
import { TCount } from "./types/CardNote.component";

const CardNote: React.FC = () => {
	const { board_id } = useParams();
	const { setCountNotes } = useContextNote();
	const { palette } = useTheme();	
	const { openDialogEditNote, openDialogDeleteSingleNote } = useDialogNote();
	
	const queryKey = ["notes", { variable: board_id }];
	const queryFn = () => fetchNotes(board_id);

	const onSuccess = ({ count }: TCount) => setCountNotes(count);	
	
	const { data, isFetching } = useQuery(queryKey, queryFn, { onSuccess });

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
