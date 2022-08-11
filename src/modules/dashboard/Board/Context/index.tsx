import { createContext, useContext, useState } from "react";
import { IContextBoard, IContextProviderBoard } from "./types/Context.component";

export const ContextBoard = createContext({} as IContextBoard);

export const ContextProviderBoard:React.FC<IContextProviderBoard> = ({ children }) => {
	const [boardID, setBoardID] = useState("");
	const [isOpenDialogEditBoard, setIsOpenDialogEditBoard] = useState(false);
	
	const value = {
		boardID,
		setBoardID,
		isOpenDialogEditBoard, 
		setIsOpenDialogEditBoard
	};

	return (
		<ContextBoard.Provider value={value}>{children}</ContextBoard.Provider>
	);
};

export const useContextBoard = () => useContext(ContextBoard);