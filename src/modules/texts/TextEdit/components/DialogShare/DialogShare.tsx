import React from "react";
import DialogShareView from "./DialogShareView";
import { useContextTextEdit } from "modules/texts/TextEdit/Context";

const DialogShare: React.FC = () => {
	const { isOpenDialogShare, setIsOpenDialogShare } = useContextTextEdit();

	const closeDialogShare = () => setIsOpenDialogShare(false);

	return <DialogShareView {...{ isOpenDialogShare, closeDialogShare }} />;
};

export default DialogShare;
