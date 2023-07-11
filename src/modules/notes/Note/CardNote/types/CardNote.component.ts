import { Palette } from "@mui/material";

export interface INote {
	note_id: string;
	color_note: string;
	title_note: string;
	observation: string;
	created_at: string;
}

export type TCount = {count: number} | any;

export interface IFetchGetNotesResponse<T = undefined> {
	count: number;
	list_notes: INote[] | T;
}

export interface ICardNotesView {
	palette: Palette;	
    isFetching: boolean;
	data: {
		count: number;
		list_notes: INote[] | undefined;
	};
	openDialogEditNote: (noteID: string) => void;
	openDialogDeleteSingleNote: (noteID: string) => void;
}
