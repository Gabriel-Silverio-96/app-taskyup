import { useContextBoard } from "modules/dashboard/Board/Context";
import { IUseDialogBoard } from "./types/UseDialogBoard";

const useDialogBoard = (): IUseDialogBoard => {
	const { setBoardID, setIsOpenDialogEditBoard } = useContextBoard();

	const openDialogEditBoard = (closeMenu: () => void) => {
		setIsOpenDialogEditBoard(true);
		closeMenu();
	};

	const closeDialogEditBoard = () => {
		setIsOpenDialogEditBoard(false);
		setBoardID("");
	};

	return { openDialogEditBoard, closeDialogEditBoard };
};
export default useDialogBoard;
