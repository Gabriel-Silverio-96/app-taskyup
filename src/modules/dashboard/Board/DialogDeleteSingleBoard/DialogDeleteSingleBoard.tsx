import React, { memo } from "react";
import { useContextBoard } from "../Context";
import useDialogBoard from "../shared/hook/useDialogBoard";
import DialogDeleteSingleBoardView from "./DialogDeleteSingleBoardView";

const DialogDeleteSingleBoard: React.FC = () => {
	const { isOpenDialogDeleteSingleBoard, boardID } = useContextBoard();
	const { closeDialogDeleteSingleBoard } = useDialogBoard();
    
	return (
		<DialogDeleteSingleBoardView
			{...{ isOpenDialogDeleteSingleBoard, closeDialogDeleteSingleBoard }}
		/>
	);
};

export default memo(DialogDeleteSingleBoard);
