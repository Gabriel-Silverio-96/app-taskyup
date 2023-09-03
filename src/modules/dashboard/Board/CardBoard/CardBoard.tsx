import { useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { memo } from "react";
import { useContextBoard } from "../Context";
import useDialogBoard from "../shared/hook/useDialogBoard";
import CardBoardView from "./CardBoardView";
import { fetchGetBoardsService } from "./service";
import { BOARD_QUERY_KEY } from "shared/services/constants/dashboard";

const CardBoard: React.FC = () => {
	const { palette } = useTheme();
	const { setBoardID } = useContextBoard();
	const { openDialogEditBoard, openDialogDeleteSingleBoard } =
		useDialogBoard();

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const isOpenMenu = Boolean(anchorEl);

	const openMenu = (event: React.MouseEvent<HTMLButtonElement>) =>
		setAnchorEl(event.currentTarget);

	const closeMenu = () => setAnchorEl(null);
	const handleBoardID = (boardID: string) => setBoardID(boardID);

	const { data: board, isFetching } = useQuery(
		[BOARD_QUERY_KEY.FETCH_GET_BOARDS],
		fetchGetBoardsService
	);

	return (
		<CardBoardView
			{...{
				board,
				isFetching,
				palette,
				openMenu,
				closeMenu,
				anchorEl,
				isOpenMenu,
				handleBoardID,
				openDialogEditBoard,
				openDialogDeleteSingleBoard,
			}}
		/>
	);
};

export default memo(CardBoard);
