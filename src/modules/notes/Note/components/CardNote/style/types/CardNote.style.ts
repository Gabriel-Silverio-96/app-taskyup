import { Theme } from "@emotion/react";
import { ViewMode } from "shared/common/types/AppTypes";

export interface ICardNoteContainerStyle {
	viewmode: ViewMode;
}

export interface ICardDotStyle {
	theme?: Theme;
	color: string;
}
