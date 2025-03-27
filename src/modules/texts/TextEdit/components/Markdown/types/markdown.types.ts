import { UseMutateFunction } from "@tanstack/react-query";
import { IDataText } from "modules/texts/TextEdit/types";
import { ChangeEvent } from "react";
import { IFetchDefaultResponse } from "shared/common/types";

export interface IMarkdownView {
	dataText: IDataText;
	onChangeText: (text: string) => void;
	mutate: UseMutateFunction<IFetchDefaultResponse>;
	onChangeTextTitle: (event: ChangeEvent<HTMLInputElement>) => void;
	isLoading: boolean;
	isSaving: boolean;
}
