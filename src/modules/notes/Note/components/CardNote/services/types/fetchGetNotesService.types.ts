export interface INote {
	note_id: string;
	color_note: string;
	title_note: string;
	observation: string;
	created_at: string;
}

export interface IFetchGetNotesResponse<T = undefined> {
	count: number;
	list_notes: INote[] | T;
}
