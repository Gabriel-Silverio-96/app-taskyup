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
	const { board_id } = useParams();

	const { totalOfNotes } = useContextNote();
	const { openDialogNewNote, openDialogDeleteAllNotes } = useDialogNote();
	const { breakpoints } = useTheme();
	const isMediumScreen = useMediaQuery(breakpoints.down("md"));

	const queryKey = ["single_board", { variable: board_id }];
	const optionsQuery = { onError: () => navigate("/dashboard") };
	const queryFn = () => fetchSingleBoard(board_id);

	const { data, isFetching } = useQuery<IFetchSingleBoard>(queryKey, queryFn, optionsQuery);
	const isDisabledDeleteAllNotesButton = totalOfNotes <= 1;

	return (
		<HeaderNoteView
			{...{
				openDialogNewNote,
				openDialogDeleteAllNotes,
				isMediumScreen,
				data,
				isFetching,
				isDisabledDeleteAllNotesButton
			}}
		/>
	);
};

export default memo(HeaderNote);
