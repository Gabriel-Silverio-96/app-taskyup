import { useMediaQuery, useTheme } from "@mui/material";
import React, { memo } from "react";
import { useParams } from "react-router-dom";
import useFetchGetSingleBoard from "shared/common/hook/useFetchGetSingleBoard/useFetchGetSingleBoard";
import { useContextNote } from "../Context";
import useDialogNote from "../shared/hook/useDialogNote";
import HeaderNoteView from "./HeaderNoteView";

const HeaderNote: React.FC = () => {
	const { board_id } = useParams();
	const { data } = useFetchGetSingleBoard(board_id);
	const { countNotes } = useContextNote();

	const { openDialogNewNote, openDialogDeleteAllNotes } = useDialogNote();
	const { breakpoints } = useTheme();
	const isMediumScreen = useMediaQuery(breakpoints.down("md"));

	return (
		<HeaderNoteView
			{...{
				data,
				openDialogNewNote,
				openDialogDeleteAllNotes,
				isMediumScreen,
				countNotes
			}}
		/>
	);
};

export default memo(HeaderNote);
