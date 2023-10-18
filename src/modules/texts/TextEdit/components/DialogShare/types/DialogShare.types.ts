import { ChangeEvent } from "react";

export interface IData {
	public: boolean;
}

export interface IDialogShareView {
	data: IData;
	isFetching: boolean;
	isOpenDialogShare: boolean;
	closeDialogShare: () => void;
	handleChangeSwitch: (event: ChangeEvent<HTMLInputElement>) => void;
	handleClickCopy: () => void;
	handleClickSave: () => void;
	isSaving: boolean;
	URLPublicText: string;
}
