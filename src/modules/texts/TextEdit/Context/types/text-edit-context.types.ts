import { Dispatch, SetStateAction } from "react";
import { IDataText } from "modules/texts/TextEdit/types";

export interface ITextEditContext {
	isOpenDialogShare: boolean;
	setIsOpenDialogShare: Dispatch<SetStateAction<boolean>>;
	dataText: IDataText;
	setDataText: Dispatch<SetStateAction<IDataText>>;
}

export interface ITextEditContextProvider {
	children: React.ReactNode;
}
