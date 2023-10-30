import { ChangeEvent } from "react";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IData {
	public: boolean;
}

export interface IDialogShareView {
	data: IData;
	isFetching: boolean;
	isOpenDialogShare: boolean;
	closeDialogShare: FunctionReturnsVoid;
	handleChangeSwitch: (event: ChangeEvent<HTMLInputElement>) => void;
	handleClickCopy: FunctionReturnsVoid;
	handleClickSave: FunctionReturnsVoid;
	isSaving: boolean;
	URLPublicText: string;
}
