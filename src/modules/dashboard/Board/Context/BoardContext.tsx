import { createContext, useContext, useState } from "react";
import type {
	IBoardContext,
	IBoardContextProvider,
} from "modules/dashboard/Board/Context/types";

export const BoardContext = createContext<IBoardContext | undefined>(undefined);

export const BoardContextProvider: React.FC<IBoardContextProvider> = ({
	children,
}) => {
	const [boardID, setBoardID] = useState("");
	const [isOpenDialogEditBoard, setIsOpenDialogEditBoard] = useState(false);
	const [isOpenDialogDeleteOneBoard, setIsOpenDialogDeleteOneBoard] =
		useState(false);
	const [dialogBackgroundImage, setDialogBackgroundImage] = useState("");

	const value = {
		boardID,
		setBoardID,
		isOpenDialogEditBoard,
		setIsOpenDialogEditBoard,
		isOpenDialogDeleteOneBoard,
		setIsOpenDialogDeleteOneBoard,
		dialogBackgroundImage,
		setDialogBackgroundImage,
	};

	return (
		<BoardContext.Provider value={value}>{children}</BoardContext.Provider>
	);
};

export const useBoardContext = () => {
	const context = useContext(BoardContext);
	if (context === undefined) {
		throw new Error(
			"useBoardContext must be used within a BoardContextProvider"
		);
	}

	return context;
};
