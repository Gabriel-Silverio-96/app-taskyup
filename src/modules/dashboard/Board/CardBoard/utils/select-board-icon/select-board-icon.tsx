import { ReactNode } from "react";
import { GoNote } from "react-icons/go";
import { MdOutlineNotes, MdOutlineSpaceDashboard } from "react-icons/md";
import { TypeBoard } from "modules/dashboard/Board/CardBoard/types/CardBoard.types";

interface BoardIconMap {
	[key: string]: ReactNode;
}

const selectBoardIcon = (typeBoard: TypeBoard, iconColor: string) => {
	const boardIcon: BoardIconMap = {
		notes: <GoNote size={15} color={iconColor} />,
		texts: <MdOutlineNotes color={iconColor} />,
		kanban: <MdOutlineSpaceDashboard color={iconColor} />,
	};

	return boardIcon[typeBoard];
};

export { selectBoardIcon };
