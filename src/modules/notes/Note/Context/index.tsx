import { createContext, useContext, useEffect, useState } from "react";
import { IContextNote, IContextProviderNote } from "./types/Context.component";
import { useParams } from "react-router-dom";

export const ContextNote = createContext<IContextNote | undefined>(undefined);

export const ContextProviderNote:React.FC<IContextProviderNote> = ({ children }) => {
	const params = useParams();	
	
	const [isOpenDialogNewNote, setIsOpenDialogNewNote] = useState(false);
	const [isOpenDialogEditNote, setIsOpenDialogEditNote] = useState(false);
	const [isOpenDialogDeleteSingleNote, setIsOpenDialogDeleteSingleNote] = useState(false);
	const [isOpenDialogDeleteAllNotes, setIsOpenDialogDeleteAllNotes] = useState(false);
	const [noteID, setNoteID] = useState("");
	const [countNotes, setCountNotes] = useState(0);
	
	useEffect(() => {
		if(params.open_dialog) setIsOpenDialogEditNote(true);	
		if(params.note_id) setNoteID(params.note_id);			
	}, [params]);

	const value = {
		isOpenDialogNewNote, 
		setIsOpenDialogNewNote,
		isOpenDialogEditNote, 
		setIsOpenDialogEditNote,
		isOpenDialogDeleteSingleNote, 
		setIsOpenDialogDeleteSingleNote,
		isOpenDialogDeleteAllNotes, 
		setIsOpenDialogDeleteAllNotes,
		countNotes, 
		setCountNotes,
		noteID, 
		setNoteID
	};

	return (
		<ContextNote.Provider value={value}>{children}</ContextNote.Provider>
	);
};

export const useContextNote = () => {
	const context = useContext(ContextNote);
	if(context === undefined) {
		throw new Error("useContextNote must be used within a ContextProviderNote");
	}

	return context;
};