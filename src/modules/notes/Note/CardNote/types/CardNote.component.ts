import { Palette } from "@mui/material";

export interface INote {
	note_id: string;
	color_note: string;
	title_note: string;
	observation: string;
	created_at: string;
}

export interface IListNotes<T = undefined> {
	notes: {
		list_notes: INote[] | T;
	}
}

export interface ICardNotesView extends IListNotes {
	palette: Palette;	
    isLoading: boolean;
	openDialogEditNote: (noteID: string) => void;
	openDialogDeleteSingleNote: (noteID: string) => void;
}
