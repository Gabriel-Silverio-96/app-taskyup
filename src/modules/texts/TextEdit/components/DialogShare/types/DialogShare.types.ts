import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ChangeEvent } from "react";
import { FunctionReturnsVoid } from "shared/common/types";
import { IFetchDefaultResponse } from "shared/common/types";

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
	mutate: UseMutateFunction<
		AxiosResponse<IFetchDefaultResponse, any>,
		unknown,
		void,
		unknown
	>;
	isLoading: boolean;
	URLPublicText: string;
}
