import { useMediaQuery, useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IFetchSingleBoard } from "shared/common/types/Fetch";
import useDialogNote from "../shared/hook/useDialogNote";
import HeaderNoteView from "./HeaderNoteView";
import fetchSingleBoard from "./service";
import { useContextNote } from "../Context";

const HeaderNote: React.FC = () => {
	const navigate = useNavigate();
	const { board_id } = useParams();
	const { countNotes } = useContextNote();

	const { openDialogNewNote, openDialogDeleteAllNotes } = useDialogNote();
	const { breakpoints } = useTheme();
	const isMediumScreen = useMediaQuery(breakpoints.down("md"));

	const queryKey = ["single_board", { variable: board_id }];
	const optionsQuery = { onError: () => navigate("/dashboard") };
	const queryFn = () => fetchSingleBoard(board_id);

	const { data, isFetching } = useQuery<IFetchSingleBoard>(queryKey, queryFn, optionsQuery);

	return (
		<HeaderNoteView
			{...{
				openDialogNewNote,
				openDialogDeleteAllNotes,
				isMediumScreen,
				data,
				isFetching,
				countNotes
			}}
		/>
	);
};

export default memo(HeaderNote);
