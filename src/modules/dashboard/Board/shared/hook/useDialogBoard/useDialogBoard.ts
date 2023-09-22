import { useContextBoard } from "modules/dashboard/Board/Context";
import { useCallback } from "react";
import { IUseDialogBoard } from "./types";
import { FunctionNonValueReturning } from "shared/types";

const useDialogBoard = (): IUseDialogBoard => {
	const {
		setBoardID,
		setIsOpenDialogEditBoard,
		setIsOpenDialogDeleteOneBoard,
	} = useContextBoard();

	const openDialogEditBoard = useCallback(
		(closeMenu: FunctionNonValueReturning) => {
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
		(closeMenu: FunctionNonValueReturning) => {
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
