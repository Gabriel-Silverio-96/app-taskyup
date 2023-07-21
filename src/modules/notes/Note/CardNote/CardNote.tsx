import { useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContextNote } from "../Context";
import useDialogNote from "../shared/hook/useDialogNote";
import CardNoteView from "./CardNoteView";
import { fetchGetNotesService } from "./service";
import { TypeCount } from "./types";

const CardNote: React.FC = () => {
	const { board_id } = useParams();
	const { setCountNotes } = useContextNote();
	const { palette } = useTheme();	
	const { openDialogEditNote, openDialogDeleteSingleNote } = useDialogNote();
	
	const queryKey = ["notes", { variable: board_id }];
	const queryFn = () => fetchGetNotesService(board_id);

	const onSuccess = ({ count }: TypeCount) => setCountNotes(count);	
	const { data, isFetching } = useQuery(queryKey, queryFn, { onSuccess });

	useEffect(() => {data && setCountNotes(data.count);}, [board_id]);
	
	return (
		<CardNoteView
			{...{
				board_id,
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
