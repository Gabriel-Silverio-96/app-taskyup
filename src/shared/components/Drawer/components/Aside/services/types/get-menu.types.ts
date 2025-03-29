import { TypeBoard } from "shared/common/types";

export interface IFavorites {
	favorite_id: string;
	related_id: string;
	board_id: string;
	board_type_id: string;
	board_type_title: TypeBoard;
	title: string;
}

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

export interface IGetMenuResponse {
	notes: IMenu[];
	texts: IMenu[];
	favorites: IFavorites[];
}
