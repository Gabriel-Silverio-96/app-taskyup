import { createContext, useContext, useState } from "react";
import { IContextBoard, IContextProviderBoard } from "./types";

export const ContextBoard = createContext<IContextBoard | undefined>(undefined);

export const ContextProviderBoard: React.FC<IContextProviderBoard> = ({
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
		<ContextBoard.Provider value={value}>{children}</ContextBoard.Provider>
	);
};

export const useContextBoard = () => {
	const context = useContext(ContextBoard);
	if (context === undefined) {
		throw new Error(
			"useContextBoard must be used within a ContextProviderBoard"
		);
	}

	return context;
};
