import { useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "shared/services/api";
import CardNoteView from "./CardNoteView";

const CardNote: React.FC = () => {
	const { board_id: boardID } = useParams();
	const { palette } = useTheme();

	const fetchNotes = async () => {
		const { data } = await api.get(`/notes/list/board_id=${boardID}`);
		return data;
	};

	const fiveMinutesInMs = 1000 * 60 * 5;
	const { data: notes, refetch, isFetching: isLoading } = useQuery(["notes"], fetchNotes, 
		{ refetchOnWindowFocus: true, staleTime: fiveMinutesInMs });
	useEffect(() => {refetch();}, [boardID]);

	return <CardNoteView {...{ palette, notes, isLoading }} />;
};

export default memo(CardNote);
