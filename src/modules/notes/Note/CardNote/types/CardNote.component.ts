import { Palette } from "@mui/material";

export interface INote {
	note_id: string;
	color_note: string;
	title_note: string;
	observation: string;
	created_at: string;
}

export type TListNotes = { list_notes: INote[] } | any;

export interface IListNotes<T = undefined> {
	notes: {
		list_notes: INote[] | T;
	}
}

export interface ICardNotesView {
	palette: Palette;	
    isFetching: boolean;
	data: {
		list_notes: INote[] | undefined;
	};
	openDialogEditNote: (noteID: string) => void;
	openDialogDeleteSingleNote: (noteID: string) => void;
}
