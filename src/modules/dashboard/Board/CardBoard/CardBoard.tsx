import { useTheme } from "@mui/material";
import React from "react";
import { GoNote } from "react-icons/go";
import { MdOutlineNotes, MdOutlineSpaceDashboard } from "react-icons/md";
import useFetchBoard from "shared/common/hook/useFetchBoard";
import { useContextBoard } from "../Context";
import CardBoardView from "./CardBoardView";

const CardBoard: React.FC = () => {
	const { palette } = useTheme();
	const { setBoardID } = useContextBoard();
	const { board, isFetching } = useFetchBoard();

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const isOpenMenu = Boolean(anchorEl);

	const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const closeMenu = () => {
		setBoardID("");
		setAnchorEl(null);
	};
	const handleBoardID = (boardID: string) => setBoardID(boardID);
		
	const boardIcon = {
		notes: <GoNote size={15} color={palette.secondary.main} />,
		text: <MdOutlineNotes color={palette.secondary.main} />,
		kanban: <MdOutlineSpaceDashboard color={palette.secondary.main} />,
	};

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
			}}
		/>
	);
};

export default CardBoard;