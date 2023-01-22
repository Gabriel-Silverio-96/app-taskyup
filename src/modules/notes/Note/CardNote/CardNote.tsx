import { useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { memo } from "react";
import { useParams } from "react-router-dom";
import api from "shared/services/api";
import { useContextNote } from "../Context";
import useDialogNote from "../shared/hook/useDialogNote";
import CardNoteView from "./CardNoteView";

const CardNote: React.FC = () => {
	const { board_id } = useParams();
	const { setTotalOfNotes } = useContextNote();
	const { palette } = useTheme();	
	const { openDialogEditNote, openDialogDeleteSingleNote } = useDialogNote();

	const fetchNotes = async () => {
		const { data } = await api.get(`/notes/list/board_id=${board_id}`);
		return data;
	};

	const onSuccess = ({ list_notes }: any) => setTotalOfNotes(list_notes.length);

	const {
		data: notes,
		isFetching: isLoading,
	} = useQuery(["notes", { variable: board_id }], fetchNotes, { onSuccess });

	return (
		<CardNoteView
			{...{
				palette,
				notes,
				isLoading,
				openDialogEditNote,
				openDialogDeleteSingleNote,
			}}
		/>
	);
};

export default memo(CardNote);
