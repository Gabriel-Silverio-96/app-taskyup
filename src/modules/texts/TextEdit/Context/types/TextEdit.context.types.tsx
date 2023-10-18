import { Dispatch, SetStateAction } from "react";

export interface IContextTextEdit {
	isOpenDialogShare: boolean;
	setIsOpenDialogShare: Dispatch<SetStateAction<boolean>>;
}

export interface IContextProviderTextEdit {
	children: React.ReactNode;
}
