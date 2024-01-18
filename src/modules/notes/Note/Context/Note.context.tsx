import { createContext, useContext, useState } from "react";
import {
	IContextNote,
	IContextProviderNote,
} from "modules/notes/Note/Context/types";
import { VIEW_MODE } from "shared/constants";
import useLocalStorage from "shared/common/hook/useLocalStorage";
import { ViewMode } from "shared/common/types/AppTypes";

export const ContextNote = createContext<IContextNote | undefined>(undefined);

export const ContextProviderNote: React.FC<IContextProviderNote> = ({
	children,
}) => {
	const [isOpenDialogDeleteOneNote, setIsOpenDialogDeleteOneNote] =
		useState(false);
	const [isOpenDialogDeleteAllNotes, setIsOpenDialogDeleteAllNotes] =
		useState(false);
	const [noteID, setNoteID] = useState("");

	const [viewMode, setViewMode] = useLocalStorage<ViewMode>(
		"@taskyup.note_view_mode",
		VIEW_MODE.GRID
	);

	const value = {
		isOpenDialogDeleteOneNote,
		setIsOpenDialogDeleteOneNote,
		isOpenDialogDeleteAllNotes,
		setIsOpenDialogDeleteAllNotes,
		noteID,
		setNoteID,
		viewMode,
		setViewMode,
	};

	return (
		<ContextNote.Provider value={value}>{children}</ContextNote.Provider>
	);
};

export const useContextNote = () => {
	const context = useContext(ContextNote);
	if (context === undefined) {
		throw new Error(
			"useContextNote must be used within a ContextProviderNote"
		);
	}

	return context;
};
