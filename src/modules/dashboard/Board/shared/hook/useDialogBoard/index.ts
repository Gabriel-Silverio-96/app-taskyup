import { useContextBoard } from "modules/dashboard/Board/Context";
import { useCallback } from "react";
import { IUseDialogBoard } from "./types/UseDialogBoard";

const useDialogBoard = (): IUseDialogBoard => {
	const {
		setBoardID,
		setIsOpenDialogEditBoard,
		setIsOpenDialogDeleteSingleBoard,
	} = useContextBoard();

	const openDialogEditBoard = useCallback((closeMenu: () => void) => {
		setIsOpenDialogEditBoard(true);
		closeMenu();
	}, []);

	const closeDialogEditBoard = useCallback(() => {
		setIsOpenDialogEditBoard(false);
		setBoardID("");
	}, []);

	const openDialogDeleteSingleBoard = useCallback((closeMenu: () => void) => {
		setIsOpenDialogDeleteSingleBoard(true);
		closeMenu();
	}, []);

	const closeDialogDeleteSingleBoard = useCallback(() => {
		setIsOpenDialogDeleteSingleBoard(false);
		setBoardID("");
	}, []);

	return {
		openDialogEditBoard,
		closeDialogEditBoard,
		openDialogDeleteSingleBoard,
		closeDialogDeleteSingleBoard,
	};
};
export default useDialogBoard;
