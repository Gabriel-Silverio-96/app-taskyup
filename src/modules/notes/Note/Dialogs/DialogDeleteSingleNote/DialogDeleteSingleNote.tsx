import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useContextNote } from "../../Context";
import useDialogNote from "../../shared/hook/useDialogNote";
import DialogDeleteSingleNoteView from "./DialogDeleteSingleNoteView";
import fetchDeleteOneNoteService from "./service";

const DialogDeleteSingleNote: React.FC = () => {
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
		<DialogDeleteSingleNoteView
			{...{
				isOpenDialogDeleteSingleNote,
				closeDialogDeleteSingleNote,
				dialogDeleteOneNoteSubmit,
				isDeleting
			}}
		/>
	);
};

export default memo(DialogDeleteSingleNote);
