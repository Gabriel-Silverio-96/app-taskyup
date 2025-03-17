import { ReactNode } from "react";
import { GoNote } from "react-icons/go";
import { MdOutlineNotes, MdOutlineSpaceDashboard } from "react-icons/md";
import type { TypeBoard } from "shared/common/types";
import { ICON_SIZE } from "shared/constants";

interface IIconMapping {
	[key: string]: ReactNode;
}

const selectBoardIcon = (typeBoard: TypeBoard, iconColor: string) => {
	const iconMapping: IIconMapping = {
		notes: <GoNote size={ICON_SIZE.MEDIUM} color={iconColor} />,
		texts: <MdOutlineNotes size={ICON_SIZE.MEDIUM} color={iconColor} />,
		kanban: (
			<MdOutlineSpaceDashboard
				size={ICON_SIZE.MEDIUM}
				color={iconColor}
			/>
		),
	};

	return iconMapping[typeBoard];
};

export { selectBoardIcon };
