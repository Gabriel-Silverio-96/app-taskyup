import { useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { memo } from "react";
import { useContextBoard } from "modules/dashboard/Board/Context";
import CardBoardView from "modules/dashboard/Board/components/CardBoard/CardBoardView";
import { BOARD_QUERY_KEY } from "shared/services/constants/dashboard";
import { useDialogBoard } from "modules/dashboard/Board/shared/hook/useDialogBoard";
import { fetchGetBoardsService } from "modules/dashboard/Board/components/CardBoard/services";

const CardBoard: React.FC = () => {
	const { palette } = useTheme();
	const { setBoardID } = useContextBoard();
	const { openDialogEditBoard, openDialogDeleteOneBoard } = useDialogBoard();

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const isOpenMenu = Boolean(anchorEl);

	const openMenu = (event: React.MouseEvent<HTMLButtonElement>) =>
		setAnchorEl(event.currentTarget);

	const closeMenu = () => setAnchorEl(null);
	const handleBoardID = (boardID: string) => setBoardID(boardID);

	const { data, isFetching } = useQuery(
		[BOARD_QUERY_KEY.FETCH_GET_BOARDS],
		fetchGetBoardsService
	);

	return (
		<CardBoardView
			{...{
				data,
				isFetching,
				palette,
				openMenu,
				closeMenu,
				anchorEl,
				isOpenMenu,
				handleBoardID,
				openDialogEditBoard,
				openDialogDeleteOneBoard,
			}}
		/>
	);
};

export default memo(CardBoard);
