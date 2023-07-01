import { useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { memo } from "react";
import { GoNote } from "react-icons/go";
import { MdOutlineNotes, MdOutlineSpaceDashboard } from "react-icons/md";
import { useContextBoard } from "../Context";
import useDialogBoard from "../shared/hook/useDialogBoard";
import CardBoardView from "./CardBoardView";
import { fetchGetBoardService } from "./service";
import { ITypeBoard } from "./types/CardBoard.component";

const CardBoard: React.FC = () => {
	const { palette } = useTheme();
	const { setBoardID } = useContextBoard();
	const { openDialogEditBoard, openDialogDeleteSingleBoard } = useDialogBoard();

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const isOpenMenu = Boolean(anchorEl);

	const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const closeMenu = () => setAnchorEl(null);
	const handleBoardID = (boardID: string) => setBoardID(boardID);
	
	const boardIcon: ITypeBoard = {
		notes: <GoNote size={15} color={palette.secondary.main} />,
		text: <MdOutlineNotes color={palette.secondary.main} />,
		kanban: <MdOutlineSpaceDashboard color={palette.secondary.main} />,
	};

	const queryKey = ["board"];
	const { data: board, isFetching } = useQuery(queryKey, fetchGetBoardService);

	return (
		<CardBoardView
			{...{
				board,
				boardIcon,
				isFetching,
				palette,
				openMenu,
				closeMenu,
				anchorEl,
				isOpenMenu,
				handleBoardID,
				openDialogEditBoard,
				openDialogDeleteSingleBoard
			}}
		/>
	);
};

export default memo(CardBoard);
