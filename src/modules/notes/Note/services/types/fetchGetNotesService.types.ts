export interface INote {
	note_id: string;
	favorite_id: string;
	favorite: boolean;
	color_note: string;
	title_note: string;
	observation: string;
	created_at: string;
	todos: {
		total: number;
		total_checked: number;
	};
}

export interface IFetchGetNotesResponse<T = undefined> {
	count: number;
	title: string;
	list_notes: INote[] | T;
}
