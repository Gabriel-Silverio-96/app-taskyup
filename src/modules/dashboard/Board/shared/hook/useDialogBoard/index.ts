import { useContextBoard } from "modules/dashboard/Board/Context";
import { IUseDialogBoard } from "./types/UseDialogBoard";

const useDialogBoard = (): IUseDialogBoard => {
	const {
		setBoardID,
		setIsOpenDialogEditBoard,
		setIsOpenDialogDeleteSingleBoard,
	} = useContextBoard();

	const openDialogEditBoard = (closeMenu: () => void) => {
		setIsOpenDialogEditBoard(true);
		closeMenu();
	};

	const closeDialogEditBoard = () => {
		setIsOpenDialogEditBoard(false);
		setBoardID("");
	};

	const openDialogDeleteSingleBoard = (closeMenu: () => void) => {
		setIsOpenDialogDeleteSingleBoard(true);
		closeMenu();
	};

	const closeDialogDeleteSingleBoard = () => {
		setIsOpenDialogDeleteSingleBoard(false);
		setBoardID("");
	};

	return {
		openDialogEditBoard,
		closeDialogEditBoard,
		openDialogDeleteSingleBoard,
		closeDialogDeleteSingleBoard,
	};
};
export default useDialogBoard;
