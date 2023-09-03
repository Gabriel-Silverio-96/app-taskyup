import { useContextBoard } from "modules/dashboard/Board/Context";
import { useCallback } from "react";
import { IUseDialogBoard } from "./types";
import { FunctionNonValueReturning } from "shared/types";

const useDialogBoard = (): IUseDialogBoard => {
	const {
		setBoardID,
		setIsOpenDialogEditBoard,
		setIsOpenDialogDeleteSingleBoard,
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

	const openDialogDeleteSingleBoard = useCallback(
		(closeMenu: FunctionNonValueReturning) => {
			setIsOpenDialogDeleteSingleBoard(true);
			closeMenu();
		},
		[]
	);

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

export { useDialogBoard };
