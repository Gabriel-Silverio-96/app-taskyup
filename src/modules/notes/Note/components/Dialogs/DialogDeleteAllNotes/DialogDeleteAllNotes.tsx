import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContextNote } from "modules/notes/Note/Context";
import DialogDeleteAllNotesView from "modules/notes/Note/components/Dialogs/DialogDeleteAllNotes/DialogDeleteAllNotesView";
import { fetchDeleteAllNotesService } from "modules/notes/Note/components/Dialogs/DialogDeleteAllNotes/services";
import { useDialogNote } from "modules/notes/Note/shared/hook/useDialogNote";
import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { NOTE_QUERY_KEY, MENU_QUERY_KEY } from "shared/constants";

const DialogDeleteAllNotes: React.FC = () => {
	const queryClient = useQueryClient();
	const { board_id } = useParams();

	const { isOpenDialogDeleteAllNotes } = useContextNote();
	const { closeDialogDeleteAllNotes } = useDialogNote();

	const onSuccessMutation = () => {
		queryClient.invalidateQueries([NOTE_QUERY_KEY.FETCH_GET_NOTES]);
		queryClient.invalidateQueries([MENU_QUERY_KEY.FETCH_GET_MENU]);
		closeDialogDeleteAllNotes();
	};

	const mutationFn = () => fetchDeleteAllNotesService(board_id);
	const optionsMutation = { onSuccess: onSuccessMutation };

	const { mutate, isLoading } = useMutation(mutationFn, optionsMutation);

	return (
		<DialogDeleteAllNotesView
			{...{
				isOpenDialogDeleteAllNotes,
				closeDialogDeleteAllNotes,
				mutate,
				isLoading,
			}}
		/>
	);
};

export default memo(DialogDeleteAllNotes);
