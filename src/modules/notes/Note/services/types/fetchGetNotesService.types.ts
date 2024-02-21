export interface INote {
	note_id: string;
	color_note: string;
	title_note: string;
	observation: string;
	created_at: string;
	favorite: boolean;
	favorite_id: string;
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
