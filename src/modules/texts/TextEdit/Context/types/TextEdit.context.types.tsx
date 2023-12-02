import { Dispatch, SetStateAction } from "react";
import { IDataText } from "modules/texts/TextEdit/components/Markdown/types";

export interface IContextTextEdit {
	isOpenDialogShare: boolean;
	setIsOpenDialogShare: Dispatch<SetStateAction<boolean>>;
	dataText: IDataText;
	setDataText: Dispatch<SetStateAction<IDataText>>;
}

export interface IContextProviderTextEdit {
	children: React.ReactNode;
}
