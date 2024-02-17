import { TypeBoard } from "shared/common/types";

export interface IMenuItems {
	board_id: string;
	item_id: string;
	title: string;
}

export interface IMenu {
	board_id: string;
	board_type_id: string;
	board_type_title: TypeBoard;
	title: string;
	items: IMenuItems[];
}

export interface IFetchGetMenuResponse {
	notes: IMenu[];
	texts: IMenu[];
}
