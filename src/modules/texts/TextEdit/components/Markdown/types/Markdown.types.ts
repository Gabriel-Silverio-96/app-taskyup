import { UseMutateFunction } from "@tanstack/react-query";
import { IDataText } from "modules/texts/TextEdit/types";
import { ChangeEvent } from "react";
import { IFetchResponseDefault } from "shared/common/types/Fetch";

export interface IMarkdownView {
	dataText: IDataText;
	onChangeText: (text: string) => void;
	mutate: UseMutateFunction<IFetchResponseDefault>;
	onChangeTextTitle: (event: ChangeEvent<HTMLInputElement>) => void;
	isLoading: boolean;
	isSaving: boolean;
}
