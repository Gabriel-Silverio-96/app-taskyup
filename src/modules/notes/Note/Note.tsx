import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import NoteView from "./NoteView";
import fetchGetNotes from "./service";

const Note: React.FC = () => {
	const { board_id } = useParams();
	
	const queryKey = ["notes", { variable: board_id }];
	const queryFn = async () => {
		const { data } = await fetchGetNotes(board_id);
		return data;
	};
	const { data, isFetching } = useQuery(queryKey, queryFn);
		
	return <NoteView {...{ data, isFetching }} />;
};

export default Note;
