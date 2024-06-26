import { useContextBoard } from "modules/dashboard/Board/Context";
import { IUseDialogBoard } from "modules/dashboard/Board/shared/hook/useDialogBoard/types";
import { useCallback } from "react";
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
