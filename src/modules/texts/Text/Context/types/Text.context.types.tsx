import { Dispatch, SetStateAction } from "react";

export interface IDialogDeleteSingleText {
	open: boolean;
	textID: string;
}

export interface IDialogDeleteAllText {
	open: boolean;
	boardID: string;
}

export interface IContextText {
	dialogDeleteSingleText: IDialogDeleteSingleText;
	setDialogDeleteSingleText: Dispatch<
		SetStateAction<IDialogDeleteSingleText>
	>;
	dialogDeleteAllText: IDialogDeleteAllText;
	setDialogDeleteAllText: Dispatch<SetStateAction<IDialogDeleteAllText>>;
	countText: number;
	setCountText: Dispatch<SetStateAction<number>>;
	isOpenTemplates: boolean;
	setIsOpenTemplates: Dispatch<SetStateAction<boolean>>;
}

export interface IContextProviderText {
	children: React.ReactNode;
}
