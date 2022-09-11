import { Palette } from "@mui/material";
import React from "react";
import { IFetchBoard } from "shared/common/hook/useFetchBoard/types/UseFetchBoard.types";
import { FunctionNonValueReturning } from "shared/types";

export interface IBoardIcon {
    notes: JSX.Element;
    text: JSX.Element;
    kanban: JSX.Element;    
}

export interface ICardBoardView {
	board: IFetchBoard[];
	boardIcon: IBoardIcon;
	isFetching: boolean;
	palette: Palette;
	openMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
	closeMenu: FunctionNonValueReturning;
	anchorEl: null | HTMLElement;
	isOpenMenu: boolean;
	handleBoardID: (boardID: string) => void;
	openDialogEditBoard: (closeMenu: FunctionNonValueReturning) => void;
	openDialogDeleteSingleBoard: (closeMenu: FunctionNonValueReturning) => void;
}
