import { useContextText } from "../../Context";

const useDialogText = () => {
	const { setDialogDeleteSingleText } = useContextText();

	const openDialogDeleteSingleText = (textID: string) => {
		setDialogDeleteSingleText({ open: true, textID: textID });
	};

	const closeDialogDeleteSingleText = () => {
		setDialogDeleteSingleText({ open: false, textID: "" });
	};

	return {
		openDialogDeleteSingleText,
		closeDialogDeleteSingleText
	};
};

export default useDialogText;