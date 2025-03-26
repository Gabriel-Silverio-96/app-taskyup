import { useTextContext } from "modules/texts/Text/Context";
import { IUseDialogText } from "./types";

const useDialogText = (): IUseDialogText => {
	const { setDialogDeleteOneText, setDialogDeleteAllText } = useTextContext();

	const openDialogDeleteOneText = (textID: string) => {
		setDialogDeleteOneText({ open: true, textID: textID });
	};

	const closeDialogDeleteOneText = () => {
		setDialogDeleteOneText({ open: false, textID: "" });
	};

	const openDialogDeleteAllTexts = (boardID: string) => {
		setDialogDeleteAllText({ open: true, boardID: boardID });
	};

	const closeDialogDeleteAllTexts = () => {
		setDialogDeleteAllText({ open: false, boardID: "" });
	};

	return {
		openDialogDeleteOneText,
		closeDialogDeleteOneText,
		openDialogDeleteAllTexts,
		closeDialogDeleteAllTexts,
	};
};

export { useDialogText };
