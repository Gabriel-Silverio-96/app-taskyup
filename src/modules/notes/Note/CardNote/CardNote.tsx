import { useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "shared/services/api";
import useDialogNote from "../shared/hook/useDialogNote";
import CardNoteView from "./CardNoteView";

const CardNote: React.FC = () => {
	const { board_id: boardID } = useParams();
	const { palette } = useTheme();
	const { openDialogEditNote } = useDialogNote();

	const fetchNotes = async () => {
		const { data } = await api.get(`/notes/list/board_id=${boardID}`);
		return data;
	};

	const { data: notes, refetch, isFetching: isLoading } = useQuery(["notes"], fetchNotes);
	useEffect(() => {refetch();}, [boardID]);

	return <CardNoteView {...{ palette, notes, isLoading, openDialogEditNote }} />;
};

export default memo(CardNote);
