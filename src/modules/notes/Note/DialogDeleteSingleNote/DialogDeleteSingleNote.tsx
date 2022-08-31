import React, { memo } from "react";
import { useContextNote } from "../Context";
import useDialogNote from "../shared/hook/useDialogNote";
import DialogDeleteSingleNoteView from "./DialogDeleteSingleNoteView";

const DialogDeleteSingleNote: React.FC = () => {
	const { isOpenDialogDeleteSingleNote } = useContextNote();
	const { closeDialogDeleteSingleNote } = useDialogNote();
	
	return (
		<DialogDeleteSingleNoteView
			{...{ 
				isOpenDialogDeleteSingleNote, 
				closeDialogDeleteSingleNote 
			}}
		/>
	);
};

export default memo(DialogDeleteSingleNote);
