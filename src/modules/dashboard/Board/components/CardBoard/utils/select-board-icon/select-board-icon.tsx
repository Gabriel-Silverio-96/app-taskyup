import { ReactNode } from "react";
import { GoNote } from "react-icons/go";
import { MdOutlineNotes, MdOutlineSpaceDashboard } from "react-icons/md";
import { TypeBoard } from "shared/common/types/AppTypes";
import { ICON_SIZE } from "shared/constants";

interface IBoardIcon {
	[key: string]: ReactNode;
}

const selectBoardIcon = (typeBoard: TypeBoard, iconColor: string) => {
	const boardIcon: IBoardIcon = {
		notes: <GoNote size={ICON_SIZE.MEDIUM} color={iconColor} />,
		texts: <MdOutlineNotes size={ICON_SIZE.MEDIUM} color={iconColor} />,
		kanban: (
			<MdOutlineSpaceDashboard
				size={ICON_SIZE.MEDIUM}
				color={iconColor}
			/>
		),
	};

	return boardIcon[typeBoard];
};

export { selectBoardIcon };
