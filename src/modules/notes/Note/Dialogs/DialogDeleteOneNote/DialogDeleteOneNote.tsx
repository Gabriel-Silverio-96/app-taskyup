import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useContextNote } from "modules/notes/Note/Context";
import useDialogNote from "modules/notes/Note/shared/hook/useDialogNote";
import DialogDeleteOneNoteView from "./DialogDeleteOneNoteView";
import { fetchDeleteOneNoteService } from "./service";

const DialogDeleteOneNote: React.FC = () => {
	const queryClient = useQueryClient();
	const { isOpenDialogDeleteSingleNote, noteID } = useContextNote();
	const { closeDialogDeleteSingleNote } = useDialogNote();

	const onSuccessMutation = () => {
		queryClient.invalidateQueries(["notes"]);
		closeDialogDeleteSingleNote();
	}; 

	const mutationFn = () => fetchDeleteOneNoteService(noteID);	
	const optionsMutation = { onSuccess: onSuccessMutation};
	
	const { mutate: dialogDeleteOneNoteSubmit, isLoading: isDeleting } = useMutation(mutationFn, optionsMutation);

	return (
		<DialogDeleteOneNoteView
			{...{
				isOpenDialogDeleteSingleNote,
				closeDialogDeleteSingleNote,
				dialogDeleteOneNoteSubmit,
				isDeleting
			}}
		/>
	);
};

export default memo(DialogDeleteOneNote);