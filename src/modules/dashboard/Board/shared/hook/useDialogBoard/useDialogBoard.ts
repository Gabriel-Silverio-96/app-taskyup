import { useContextBoard } from "modules/dashboard/Board/Context";
import { useCallback } from "react";
import { IUseDialogBoard } from "./types";
import { FunctionReturnsVoid } from "shared/common/types";

const useDialogBoard = (): IUseDialogBoard => {
	const {
		setBoardID,
		setIsOpenDialogEditBoard,
		setIsOpenDialogDeleteOneBoard,
	} = useContextBoard();

	const openDialogEditBoard = useCallback(
		(closeMenu: FunctionReturnsVoid) => {
			setIsOpenDialogEditBoard(true);
			closeMenu();
		},
		[]
	);

	const closeDialogEditBoard = useCallback(() => {
		setIsOpenDialogEditBoard(false);
		setBoardID("");
	}, []);

	const openDialogDeleteOneBoard = useCallback(
		(closeMenu: FunctionReturnsVoid) => {
			setIsOpenDialogDeleteOneBoard(true);
			closeMenu();
		},
		[]
	);

	const closeDialogDeleteOneBoard = useCallback(() => {
		setIsOpenDialogDeleteOneBoard(false);
		setBoardID("");
	}, []);

	return {
		openDialogEditBoard,
		closeDialogEditBoard,
		openDialogDeleteOneBoard,
		closeDialogDeleteOneBoard,
	};
};

export { useDialogBoard };
