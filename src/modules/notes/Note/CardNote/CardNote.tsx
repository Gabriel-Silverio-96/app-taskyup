import { useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { memo, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useContextNote } from "../Context";
import useDialogNote from "../shared/hook/useDialogNote";
import CardNoteView from "./CardNoteView";
import fetchGetNotes from "./service";
import { TCount } from "./types/CardNote.component";

const CardNote: React.FC = () => {
	const [searchParams] = useSearchParams();
	const board_id = searchParams.get("board_id");
	
	const { setCountNotes } = useContextNote();
	const { palette } = useTheme();	
	const { openDialogEditNote, openDialogDeleteSingleNote } = useDialogNote();
	
	const queryKey = ["notes", { variable: board_id }];
	const queryFn = () => fetchGetNotes(board_id);

	const onSuccess = ({ count }: TCount) => setCountNotes(count);	
	const { data, isFetching } = useQuery(queryKey, queryFn, { onSuccess });

	useEffect(() => {data && setCountNotes(data.count);}, [board_id]);

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
