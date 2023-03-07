export interface INote {
	note_id: string;
	color_note: string;
	title_note: string;
	observation: string;
	created_at: string;
}

export interface IFetchGetNotes<T = undefined> {
	board_title: string;
	total_notes: number;
	notes: INote[] | T;
}

export interface IListNotes {
    notes: INote[] | undefined;
}