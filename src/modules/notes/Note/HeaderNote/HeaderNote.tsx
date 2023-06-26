import { useMediaQuery, useTheme } from "@mui/material";
import React, { memo } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import useFetchGetSingleBoard from "shared/common/hook/useFetchGetSingleBoard/useFetchGetSingleBoard";
import { useContextNote } from "../Context";
import useDialogNote from "../shared/hook/useDialogNote";
import HeaderNoteView from "./HeaderNoteView";

const HeaderNote: React.FC = () => {
	const [searchParams] = useSearchParams();
	const board_id = searchParams.get("board_id");
	
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
