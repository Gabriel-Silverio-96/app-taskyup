import { useTheme } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "shared/services/api";
import { useContextNote } from "../Context";
import useDialogNote from "../shared/hook/useDialogNote";
import CardNoteView from "./CardNoteView";
import { IListNotes } from "./types/CardNote.component";

const CardNote: React.FC = () => {
	const { board_id: boardID } = useParams();
	const { setTotalOfNotes } = useContextNote();
	const { palette } = useTheme();
	const queryClient = useQueryClient();
	const { openDialogEditNote, openDialogDeleteSingleNote } = useDialogNote();

	const fetchNotes = async () => {
		const { data } = await api.get(`/notes/list/board_id=${boardID}`);
		return data;
	};

	const onSuccess = ({ list_notes }: any) => setTotalOfNotes(list_notes.length);

	const {
		data: notes,
		refetch,
		isFetching: isLoading,
	} = useQuery(["notes"], fetchNotes, { onSuccess });

	useEffect(() => {
		refetch();
		const setListNotesEmptyUnmount = () => {
			const unmountDataListNotesEmpty = { notes: { list_notes: [] }};
			queryClient.setQueryData<IListNotes | any>(["notes"], unmountDataListNotesEmpty );
		};
		return () => setListNotesEmptyUnmount();
	}, [boardID]);

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
