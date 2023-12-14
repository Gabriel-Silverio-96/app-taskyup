export interface IMenu {
	board_id: string;
	board_type_id: string;
	title: string;
}

export interface IFetchGetMenuResponse {
	notes: IMenu[];
	texts: IMenu[];
}
