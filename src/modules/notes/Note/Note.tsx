import React from "react";
import NoteView from "./NoteView";
import { getNotesService } from "modules/notes/Note/services";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { NOTE_QUERY_KEY } from "shared/constants";

const Note: React.FC = () => {
	const { board_id } = useParams();

	const queryKey = [NOTE_QUERY_KEY.FETCH_GET_NOTES, { variable: board_id }];
	const queryFn = () => getNotesService(board_id);

	const { data, isFetching } = useQuery(queryKey, queryFn);

	const isShowDoodleMessage = data?.count === 0;

	return <NoteView {...{ data, isFetching, isShowDoodleMessage }} />;
};

export default Note;
