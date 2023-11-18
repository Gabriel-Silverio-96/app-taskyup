import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContextNote } from "modules/notes/Note/Context";
import DialogDeleteOneNoteView from "modules/notes/Note/components/Dialogs/DialogDeleteOneNote/DialogDeleteOneNoteView";
import { fetchDeleteOneNoteService } from "modules/notes/Note/components/Dialogs/DialogDeleteOneNote/services";
import { NOTE_QUERY_KEY } from "modules/notes/Note/constants";
import { useDialogNote } from "modules/notes/Note/shared/hook/useDialogNote";
import React, { memo } from "react";

const DialogDeleteOneNote: React.FC = () => {
	const queryClient = useQueryClient();
	const { isOpenDialogDeleteOneNote, noteID } = useContextNote();
	const { closeDialogDeleteOneNote } = useDialogNote();

	const onSuccessMutation = () => {
		queryClient.invalidateQueries([NOTE_QUERY_KEY.FETCH_GET_NOTES]);
		closeDialogDeleteOneNote();
	};

	const mutationFn = () => fetchDeleteOneNoteService(noteID);
	const optionsMutation = { onSuccess: onSuccessMutation };

	const { mutate: handleClickDeleteOneNote, isLoading: isDeleting } =
		useMutation(mutationFn, optionsMutation);

	return (
		<DialogDeleteOneNoteView
			{...{
				isOpenDialogDeleteOneNote,
				closeDialogDeleteOneNote,
				handleClickDeleteOneNote,
				isDeleting,
			}}
		/>
	);
};

export default memo(DialogDeleteOneNote);
