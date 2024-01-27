import React from "react";
import { ViewMode } from "shared/common/types";

export interface IContextProviderNote {
	children: React.ReactNode;
}

export interface IContextNote {
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
