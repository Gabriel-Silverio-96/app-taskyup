import { Palette } from "@mui/material";

export interface INotes {
	note_id: string;
	color_note: string;
	title_note: string;
	observation: string;
	created_at: string;
}

export interface ICardNotesView {
	palette: Palette;
	notes: { 
        list_notes: INotes[] | undefined 
    };
    isLoading: boolean;
}
