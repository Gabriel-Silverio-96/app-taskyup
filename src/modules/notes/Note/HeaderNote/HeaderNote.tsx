import { useMediaQuery, useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { memo, useState } from "react";
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
	const { palette, breakpoints } = useTheme();
	const isMediumScreen = useMediaQuery(breakpoints.down("md"));
	
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	
	const isOpenMenu = Boolean(anchorEl);
	const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
	const closeMenu = () => setAnchorEl(null);

	const openDialogDeleteAllNotesAndCloseMenu = () => {
		openDialogDeleteAllNotes();
		closeMenu();
	};

	const queryKey = ["single_board", { variable: boardID }];
	const optionsQuery = { onError: () => navigate("/dashboard") };
	const queryFn = () => fetchSingleBoard(boardID);

	const { data, isFetching } = useQuery<IFetchSingleBoard>(queryKey, queryFn, optionsQuery);

	return (
		<HeaderNoteView
			{...{
				isOpenMenu,
				totalOfNotes,
				openDialogNewNote,
				openDialogDeleteAllNotesAndCloseMenu,
				anchorEl,
				openMenu,
				closeMenu,
				isMediumScreen,
				palette,
				data,
				isFetching
			}}
		/>
	);
};

export default memo(HeaderNote);
