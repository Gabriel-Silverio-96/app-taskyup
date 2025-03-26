import { useTextContext } from "modules/texts/Text/Context";
import { IUseDialogText } from "./types";
import { useCallback } from "react";

const useDialogText = (): IUseDialogText => {
	const { setDialogDeleteOneText, setDialogDeleteAllText } = useTextContext();

	const openDialogDeleteOneText = useCallback((textID: string) => {
		setDialogDeleteOneText({ open: true, textID: textID });
	}, []);

	const closeDialogDeleteOneText = useCallback(() => {
		setDialogDeleteOneText({ open: false, textID: "" });
	}, []);

	const openDialogDeleteAllTexts = useCallback((boardID: string) => {
		setDialogDeleteAllText({ open: true, boardID: boardID });
	}, []);

	const closeDialogDeleteAllTexts = useCallback(() => {
		setDialogDeleteAllText({ open: false, boardID: "" });
	}, []);

	return {
		openDialogDeleteOneText,
		closeDialogDeleteOneText,
		openDialogDeleteAllTexts,
		closeDialogDeleteAllTexts,
	};
};

export { useDialogText };
