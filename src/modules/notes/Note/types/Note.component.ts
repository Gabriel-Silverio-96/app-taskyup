export interface INote {
	note_id: string;
	color_note: string;
	title_note: string;
	observation: string;
	created_at: string;
}

export interface IFetchGetNotes<T = undefined> {
	notes: {
		board_title: string;
		total_notes: number;
		list_notes: INote[] | T;
	}
}

export interface IListNotes {
    list_notes: INote[] | undefined;
}