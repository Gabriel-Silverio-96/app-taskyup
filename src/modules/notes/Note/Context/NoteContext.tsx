import { createContext, useContext, useState } from "react";
import type {
	INoteContext,
	INoteContextProvider,
} from "modules/notes/Note/Context/types";
import { VIEW_MODE } from "shared/constants";
import useLocalStorage from "shared/common/hooks/useLocalStorage";
import { ViewMode } from "shared/common/types";

export const NoteContext = createContext<INoteContext | undefined>(undefined);

export const NoteContextProvider: React.FC<INoteContextProvider> = ({
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
		<NoteContext.Provider value={value}>{children}</NoteContext.Provider>
	);
};

export const useNoteContext = () => {
	const context = useContext(NoteContext);
	if (context === undefined) {
		throw new Error(
			"useNoteContext must be used within a NoteContextProvider"
		);
	}

	return context;
};
