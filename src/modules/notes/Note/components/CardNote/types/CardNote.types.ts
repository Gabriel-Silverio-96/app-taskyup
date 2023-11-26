import { Palette } from "@mui/material";
import { INote } from "modules/notes/Note/components/CardNote/services/types";

export type TypeCount = { count: number } | any;

export interface ICardNotesView {
	board_id: string | undefined;
	palette: Palette;
	isFetching: boolean;
	data: {
		count: number;
		list_notes: INote[] | undefined;
	};
	openDialogDeleteOneNote: (noteID: string) => void;
}
