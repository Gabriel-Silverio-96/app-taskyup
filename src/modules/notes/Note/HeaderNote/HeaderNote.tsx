import { useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IFetchSingleBoard } from "shared/common/types/Fetch";
import api from "shared/services/api";
import useDialogNote from "../shared/hook/useDialogNote";
import HeaderNoteView from "./HeaderNoteView";

const HeaderNote: React.FC = () => {
	const { board_id: boardID } = useParams();
	const navigate = useNavigate();
	const { palette } = useTheme();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isOpenMenu = Boolean(anchorEl);
	const { openDialogNewNote, openDialogDeleteAllNotes } = useDialogNote();

	const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
	const closeMenu = () => setAnchorEl(null);

	const fetchSingleBoard = async () => {
		const { data } = await api.get(`/board/board_id=${boardID}`);
		return data;
	};

	const { data, refetch } = useQuery<IFetchSingleBoard>(["single_board"], fetchSingleBoard,
		{ cacheTime: 0, onError: () => navigate("/dashboard"), retry: false }
	);
	useEffect(() => {refetch();}, [boardID]);
	
	const openDialogDeleteAllNotesAndCloseMenu = () => {
		openDialogDeleteAllNotes();
		closeMenu();
	};

	return (
		<HeaderNoteView
			{...{
				isOpenMenu,
				openDialogNewNote,
				openDialogDeleteAllNotesAndCloseMenu,
				anchorEl,
				openMenu,
				closeMenu,
				palette,
				data,
			}}
		/>
	);
};

export default HeaderNote;
