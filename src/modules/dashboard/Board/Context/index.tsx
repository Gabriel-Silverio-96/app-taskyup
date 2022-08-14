import { createContext, useContext, useState } from "react";
import { IContextBoard, IContextProviderBoard } from "./types/Context.component";

export const ContextBoard = createContext({} as IContextBoard);

export const ContextProviderBoard:React.FC<IContextProviderBoard> = ({ children }) => {
	const [boardID, setBoardID] = useState("");
	const [isOpenDialogEditBoard, setIsOpenDialogEditBoard] = useState(false);
	const [isOpenDialogDeleteSingleBoard, setIsOpenDialogDeleteSingleBoard] = useState(false);
	
	const value = {
		boardID,
		setBoardID,
		isOpenDialogEditBoard, 
		setIsOpenDialogEditBoard,
		isOpenDialogDeleteSingleBoard, 
		setIsOpenDialogDeleteSingleBoard
	};

	return (
		<ContextBoard.Provider value={value}>{children}</ContextBoard.Provider>
	);
};

export const useContextBoard = () => useContext(ContextBoard);