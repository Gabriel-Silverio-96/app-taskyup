import { useMediaQuery, useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IFetchSingleBoard } from "shared/common/types/Fetch";
import { useContextNote } from "../Context";
import useDialogNote from "../shared/hook/useDialogNote";
import HeaderNoteView from "./HeaderNoteView";
import fetchSingleBoard from "./service";

const HeaderNote: React.FC = () => {
	const navigate = useNavigate();
	const { totalOfNotes } = useContextNote();
	const { openDialogNewNote, openDialogDeleteAllNotes } = useDialogNote();
	
	const { board_id: boardID } = useParams();
	const { breakpoints } = useTheme();
	const isMediumScreen = useMediaQuery(breakpoints.down("md"));

	const openDialogDeleteAllNotesAndCloseMenu = () => {
		openDialogDeleteAllNotes();
	};

	const queryKey = ["single_board", { variable: boardID }];
	const optionsQuery = { onError: () => navigate("/dashboard") };
	const queryFn = () => fetchSingleBoard(boardID);

	const { data, isFetching } = useQuery<IFetchSingleBoard>(queryKey, queryFn, optionsQuery);

	return (
		<HeaderNoteView
			{...{
				totalOfNotes,
				openDialogNewNote, 
				openDialogDeleteAllNotesAndCloseMenu, 
				isMediumScreen,
				data,
				isFetching
			}}
		/>
	);
};

export default memo(HeaderNote);
