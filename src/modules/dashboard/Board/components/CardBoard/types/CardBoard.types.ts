import { Palette } from "@mui/material";
import React from "react";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export type TypeBoard = "notes" | "texts" | "kanban";

export interface IMemberBoard {
	first_name: string;
	full_name: string;
}

export interface IFetchGetBoardsResponse {
	board_id: string;
	title: string;
	type_board: TypeBoard;
	created_at: string;
	background_image: string;
	members_board: Array<IMemberBoard>;
}

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
