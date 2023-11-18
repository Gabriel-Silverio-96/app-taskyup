import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useContextNote } from "modules/notes/Note/Context";
import { useDialogNote } from "modules/notes/Note/shared/hook/useDialogNote";
import DialogDeleteOneNoteView from "./DialogDeleteOneNoteView";
import { fetchDeleteOneNoteService } from "./services";
import { NOTE_QUERY_KEY } from "modules/notes/Note/constants";

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
