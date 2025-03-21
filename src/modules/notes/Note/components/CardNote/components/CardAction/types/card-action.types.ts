export interface ICardAction {
	note_id: string;
	board_id: string | undefined;
	favorite_id: string | null;
	favorite: boolean;
}
