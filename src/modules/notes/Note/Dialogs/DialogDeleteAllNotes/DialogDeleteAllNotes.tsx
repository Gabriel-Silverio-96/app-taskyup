import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { useContextNote } from "../../Context";
import useDialogNote from "../../shared/hook/useDialogNote";
import DialogDeleteAllNotesView from "./DialogDeleteAllNotesView";
import fetchDialogDeleteAllNotes from "./service";

const DialogDeleteAllNotes: React.FC = () => {
	const queryClient = useQueryClient();
	const { board_id: boardID } = useParams();
	
	const { isOpenDialogDeleteAllNotes } = useContextNote();
	const { closeDialogDeleteAllNotes } = useDialogNote();

	const onSuccessMutation = () => {
		queryClient.invalidateQueries(["notes"]);
		closeDialogDeleteAllNotes();
	}; 

	const mutationFn = () => fetchDialogDeleteAllNotes(boardID);
	const optionsMutation = { onSuccess: onSuccessMutation};

	const { mutate: fetchDeleteAllNotes, isLoading: isDeleting } = useMutation(mutationFn, optionsMutation);

	return (
		<DialogDeleteAllNotesView
			{...{
				isOpenDialogDeleteAllNotes,
				closeDialogDeleteAllNotes,
				fetchDeleteAllNotes,
				isDeleting
			}}
		/>
	);
};

export default memo(DialogDeleteAllNotes);
