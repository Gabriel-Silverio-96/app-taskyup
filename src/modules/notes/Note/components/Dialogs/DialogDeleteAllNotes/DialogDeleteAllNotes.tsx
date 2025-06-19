import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNoteContext } from "modules/notes/Note/Context";
import DialogDeleteAllNotesView from "modules/notes/Note/components/Dialogs/DialogDeleteAllNotes/DialogDeleteAllNotesView";
import { deleteAllNotesService } from "modules/notes/Note/components/Dialogs/DialogDeleteAllNotes/services";
import { useDialogNote } from "modules/notes/Note/shared/hooks/useDialogNote";
import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { NOTE_QUERY_KEY, MENU_QUERY_KEY } from "shared/constants";

const DialogDeleteAllNotes: React.FC = () => {
	const queryClient = useQueryClient();
	const { board_id } = useParams();

	const { isOpenDialogDeleteAllNotes } = useNoteContext();
	const { closeDialogDeleteAllNotes } = useDialogNote();

	const onSuccess = () => {
		queryClient.invalidateQueries([NOTE_QUERY_KEY.FETCH_GET_NOTES]);
		queryClient.invalidateQueries([MENU_QUERY_KEY.FETCH_GET_MENU]);
		closeDialogDeleteAllNotes();
	};

	const mutationFn = () => deleteAllNotesService(board_id);
	const { mutate, isLoading } = useMutation(mutationFn, { onSuccess });

	const onClose = !isLoading ? closeDialogDeleteAllNotes : () => "";

	return (
		<DialogDeleteAllNotesView
			{...{
				isOpenDialogDeleteAllNotes,
				closeDialogDeleteAllNotes,
				mutate,
				isLoading,
				onClose,
			}}
		/>
	);
};

export default memo(DialogDeleteAllNotes);
