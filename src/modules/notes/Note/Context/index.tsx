import { createContext, useContext, useState } from "react";
import { IContextNote, IContextProviderNote } from "./types/Context.component";

export const ContextNote = createContext({} as IContextNote);

export const ContextProviderNote:React.FC<IContextProviderNote> = ({ children }) => {
	const [isOpenDialogNewNote, setIsOpenDialogNewNote] = useState(false);
	const [isOpenDialogEditNote, setIsOpenDialogEditNote] = useState(false);
	const [noteID, setNoteID] = useState("");
	
	const value = {
		isOpenDialogNewNote, 
		setIsOpenDialogNewNote,
		isOpenDialogEditNote, 
		setIsOpenDialogEditNote,
		noteID, 
		setNoteID
	};

	return (
		<ContextNote.Provider value={value}>{children}</ContextNote.Provider>
	);
};

export const useContextNote = () => useContext(ContextNote);