export type TypeBoard = "texts" | "notes" | "kanban";

export type FunctionReturnsVoid = () => void;

export type ViewMode = "GRID" | "LIST";

export interface IPaginationModel {
	page: number;
	pageSize: number;
}
