import { useTheme } from "@mui/material";
import React from "react";
import { GoNote } from "react-icons/go";
import { MdOutlineNotes, MdOutlineSpaceDashboard } from "react-icons/md";
import useFetchBoard from "shared/common/hook/useFetchBoard";
import CardBoardView from "./CardBoardView";

const CardBoard: React.FC = () => {
	const { palette } = useTheme();
	const { board, isLoading } = useFetchBoard();

	const boardIcon = {
		notes: <GoNote size={15} color={palette.secondary.main} />,
		text: <MdOutlineNotes color={palette.secondary.main}/>,
		kanban: <MdOutlineSpaceDashboard color={palette.secondary.main}/>,
	};

	return <CardBoardView {...{ board, boardIcon, isLoading }} />;
};

export default CardBoard;
