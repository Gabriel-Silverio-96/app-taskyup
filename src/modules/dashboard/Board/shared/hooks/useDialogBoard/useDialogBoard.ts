import { useBoardContext } from "modules/dashboard/Board/Context";
import type { IUseDialogBoard } from "modules/dashboard/Board/shared/hooks/useDialogBoard/types";
import { useCallback } from "react";
import type { FunctionReturnsVoid } from "shared/common/types";

const useDialogBoard = (): IUseDialogBoard => {
	const {
		setBoardID,
		setIsOpenDialogEditBoard,
		setIsOpenDialogDeleteOneBoard,
	} = useBoardContext();

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
