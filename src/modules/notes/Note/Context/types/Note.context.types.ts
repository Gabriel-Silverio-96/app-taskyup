import React from "react";

export interface IContextProviderNote {
	children: React.ReactNode;
}

export interface IContextNote {
	isOpenDialogNewNote: boolean;
	setIsOpenDialogNewNote: React.Dispatch<React.SetStateAction<boolean>>;
	isOpenDialogEditNote: boolean;
	setIsOpenDialogEditNote: React.Dispatch<React.SetStateAction<boolean>>;
	isOpenDialogDeleteSingleNote: boolean;
	setIsOpenDialogDeleteSingleNote: React.Dispatch<
		React.SetStateAction<boolean>
	>;
	isOpenDialogDeleteAllNotes: boolean;
	setIsOpenDialogDeleteAllNotes: React.Dispatch<
		React.SetStateAction<boolean>
	>;
	countNotes: number;
	setCountNotes: React.Dispatch<React.SetStateAction<number>>;
	noteID: string;
	setNoteID: React.Dispatch<React.SetStateAction<string>>;
}
