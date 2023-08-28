import { Palette } from "@mui/material";
import React from "react";
import { FunctionNonValueReturning } from "shared/types";

export type TypeBoard = "notes" | "texts" | "kanban";

export interface IMemberBoard {
	first_name: string;
}

export interface IFetchGetBoardResponse {
	board_id: string;
	title: string;
	type_board: TypeBoard;
	created_at: string;
	background_image: string;
	members_board: Array<IMemberBoard>;
}

export interface ICardBoardView {
	board: IFetchGetBoardResponse[] | undefined;
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
