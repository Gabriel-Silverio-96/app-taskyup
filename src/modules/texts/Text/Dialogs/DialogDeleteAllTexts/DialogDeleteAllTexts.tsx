import React, { memo } from "react";
import { useContextText } from "../../Context";
import useDialogText from "../../hooks/useDialogText";
import DialogDeleteAllTextView from "./DialogDeleteAllTextsView";

const DialogDeleteAllTexts: React.FC = () => {
	const { closeDialogDeleteAllTexts } = useDialogText();
	const { dialogDeleteAllText } = useContextText();

	return <DialogDeleteAllTextView {...{ dialogDeleteAllText, closeDialogDeleteAllTexts }}/>;
};

export default memo(DialogDeleteAllTexts);