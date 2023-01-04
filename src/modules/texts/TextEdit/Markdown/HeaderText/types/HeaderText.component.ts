import { ChangeEvent } from "react";

export interface IHeaderText {
	saveText: () => void;
	titleText: string;
	onChangeTextTitle: (event: ChangeEvent<HTMLInputElement>) => void;
}
