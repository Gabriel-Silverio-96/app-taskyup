import React from "react";
import { useContextText } from "../../Context";
import useDialogText from "../../hooks/useDialogText";
import DialogDeleteSingleTextView from "./DialogDeleteSingleTextView";

const DialogDeleteSingleText: React.FC = () => {
	const { dialogDeleteSingleText } = useContextText();
	const { closeDialogDeleteSingleText } = useDialogText();
		
	return <DialogDeleteSingleTextView {...{ dialogDeleteSingleText, closeDialogDeleteSingleText }} />;
};

export default DialogDeleteSingleText;