export interface LatestAccess {
	id: string | null;
	title: string;
	board_id: string | null;
	path?: string;
}

export interface DeleteLatestAccessParams {
	id?: string | null;
	board_id?: string | null;
}
export type AddLatestAccess = (params: LatestAccess) => void;
export type EditLatestAccess = (params: Omit<LatestAccess, "board_id">) => void;
export type DeleteLatestAccess = (params: DeleteLatestAccessParams) => void;

export interface IUseLatestAccess {
	storage: Array<LatestAccess> | [];
	addLatestAccess: AddLatestAccess;
	editLatestAccess: EditLatestAccess;
	deleteLatestAccess: DeleteLatestAccess;
}
