import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { useContextNote } from "modules/notes/Note/Context";
import { useDialogNote } from "modules/notes/Note/shared/hook/useDialogNote";
import DialogDeleteAllNotesView from "./DialogDeleteAllNotesView";
import { fetchDeleteAllNotesService } from "./services";
import { NOTE_QUERY_KEY } from "modules/notes/Note/constants";

const DialogDeleteAllNotes: React.FC = () => {
	const queryClient = useQueryClient();
	const { board_id } = useParams();

	const { isOpenDialogDeleteAllNotes } = useContextNote();
	const { closeDialogDeleteAllNotes } = useDialogNote();

	const onSuccessMutation = () => {
		queryClient.invalidateQueries([NOTE_QUERY_KEY.FETCH_GET_NOTES]);
		closeDialogDeleteAllNotes();
	};

	const mutationFn = () => fetchDeleteAllNotesService(board_id);
	const optionsMutation = { onSuccess: onSuccessMutation };

	const { mutate: dialogDeleteAllNotesSubmit, isLoading: isDeleting } =
		useMutation(mutationFn, optionsMutation);

	return (
		<DialogDeleteAllNotesView
			{...{
				isOpenDialogDeleteAllNotes,
				closeDialogDeleteAllNotes,
				dialogDeleteAllNotesSubmit,
				isDeleting,
			}}
		/>
	);
};

export default memo(DialogDeleteAllNotes);
