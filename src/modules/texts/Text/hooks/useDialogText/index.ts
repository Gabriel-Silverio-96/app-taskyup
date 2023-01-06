import { useContextText } from "../../Context";
import { IUseDialogText } from "./types/UseDialog";

const useDialogText = (): IUseDialogText => {
	const { setDialogDeleteSingleText, setDialogDeleteAllText } = useContextText();

	const openDialogDeleteSingleText = (textID: string) => {
		setDialogDeleteSingleText({ open: true, textID: textID });
	};

	const closeDialogDeleteSingleText = () => {
		setDialogDeleteSingleText({ open: false, textID: "" });
	};

	const openDialogDeleteAllTexts = (boardID: string) => {
		setDialogDeleteAllText({ open: true, boardID: boardID });
	};

	const closeDialogDeleteAllTexts = () => {
		setDialogDeleteAllText({ open: false, boardID: "" });
	};

	return {
		openDialogDeleteSingleText,
		closeDialogDeleteSingleText,
		openDialogDeleteAllTexts,
		closeDialogDeleteAllTexts
	};
};

export default useDialogText;