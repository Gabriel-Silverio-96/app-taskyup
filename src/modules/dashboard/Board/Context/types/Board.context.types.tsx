import React from "react";

export interface IContextProviderBoard {
	children: React.ReactNode;
}

export interface IContextBoard {
	boardID: string;
	setBoardID: React.Dispatch<React.SetStateAction<string>>;
	isOpenDialogEditBoard: boolean;
	setIsOpenDialogEditBoard: React.Dispatch<React.SetStateAction<boolean>>;
	isOpenDialogDeleteOneBoard: boolean;
	setIsOpenDialogDeleteOneBoard: React.Dispatch<
		React.SetStateAction<boolean>
	>;
	dialogBackgroundImage: string;
	setDialogBackgroundImage: React.Dispatch<React.SetStateAction<string>>;
}
