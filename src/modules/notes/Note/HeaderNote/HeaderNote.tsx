import { useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "shared/services/api";
import HeaderNoteView from "./HeaderNoteView";

const HeaderNote: React.FC = () => {
	const { board_id: boardID } = useParams();
	const navigate = useNavigate();
	const { palette } = useTheme();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isOpenMenu = Boolean(anchorEl);

	const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
	const closeMenu = () => setAnchorEl(null);

	const fetchSingleBoard = async () => {
		const { data } = await api.get(`/board/board_id=${boardID}`);
		return data;
	};

	const { data: boardData, refetch } = useQuery(["single_board"], fetchSingleBoard,
		{ cacheTime: 0, onError: () => navigate("/dashboard"), retry: false }
	);
	useEffect(() => {refetch();}, [boardID]);

	return (
		<HeaderNoteView
			{...{
				isOpenMenu,
				anchorEl,
				openMenu,
				closeMenu,
				palette,
				boardData,
			}}
		/>
	);
};

export default HeaderNote;
