import { Palette } from "@mui/material";
import React from "react";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";
import { IFetchGetBoardsResponse } from "modules/dashboard/Board/components/CardBoard/services/types";

export type TypeBoard = "notes" | "texts" | "kanban";

export interface ICardBoardView {
	board: IFetchGetBoardsResponse[] | undefined;
	isFetching: boolean;
	palette: Palette;
	openMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
	closeMenu: FunctionReturnsVoid;
	anchorEl: null | HTMLElement;
	isOpenMenu: boolean;
	handleBoardID: (boardID: string) => void;
	openDialogEditBoard: (closeMenu: FunctionReturnsVoid) => void;
	openDialogDeleteOneBoard: (closeMenu: FunctionReturnsVoid) => void;
}
