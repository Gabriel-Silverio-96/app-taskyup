import React from "react";
import { ViewMode } from "shared/common/types";

export interface INoteContextProvider {
	children: React.ReactNode;
}

export interface INoteContext {
	isOpenDialogDeleteOneNote: boolean;
	setIsOpenDialogDeleteOneNote: React.Dispatch<React.SetStateAction<boolean>>;
	isOpenDialogDeleteAllNotes: boolean;
	setIsOpenDialogDeleteAllNotes: React.Dispatch<
		React.SetStateAction<boolean>
	>;
	noteID: string;
	setNoteID: React.Dispatch<React.SetStateAction<string>>;
	viewMode: ViewMode;
	setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
}
