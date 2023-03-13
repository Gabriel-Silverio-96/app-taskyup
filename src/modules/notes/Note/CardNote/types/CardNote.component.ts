import { Palette } from "@mui/material";
import { INote } from "../../types/Note.component";

export interface ICardNote {
	data: {
		total_notes: number;
		notes: INote[] | undefined;
	};
}

export interface ICardNotesView extends ICardNote {
	palette: Palette;	
	openDialogEditNote: (noteID: string) => void;
	openDialogDeleteSingleNote: (noteID: string) => void;
}

export interface INoteNotCreatedMessage {
	totalNotes: number;
}