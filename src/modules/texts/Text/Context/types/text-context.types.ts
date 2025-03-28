import { Dispatch, SetStateAction } from "react";

export interface IDialogDeleteSingleText {
	open: boolean;
	textID: string;
}

export interface IDialogDeleteAllText {
	open: boolean;
	boardID: string;
}

export interface ITextContext {
	dialogDeleteOneText: IDialogDeleteSingleText;
	setDialogDeleteOneText: Dispatch<SetStateAction<IDialogDeleteSingleText>>;
	dialogDeleteAllText: IDialogDeleteAllText;
	setDialogDeleteAllText: Dispatch<SetStateAction<IDialogDeleteAllText>>;
	isOpenTemplates: boolean;
	setIsOpenTemplates: Dispatch<SetStateAction<boolean>>;
}

export interface ITextContextProvider {
	children: React.ReactNode;
}
