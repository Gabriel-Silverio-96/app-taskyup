import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContextNote } from "modules/notes/Note/Context";
import DialogDeleteOneNoteView from "modules/notes/Note/components/Dialogs/DialogDeleteOneNote/DialogDeleteOneNoteView";
import { deleteOneNoteService } from "modules/notes/Note/components/Dialogs/DialogDeleteOneNote/services";
import { useDialogNote } from "modules/notes/Note/shared/hook/useDialogNote";
import React, { memo } from "react";
import { NOTE_QUERY_KEY, MENU_QUERY_KEY } from "shared/constants";

const DialogDeleteOneNote: React.FC = () => {
	const queryClient = useQueryClient();
	const { isOpenDialogDeleteOneNote, noteID } = useContextNote();
	const { closeDialogDeleteOneNote } = useDialogNote();

	const onSuccess = () => {
		queryClient.invalidateQueries([NOTE_QUERY_KEY.FETCH_GET_NOTES]);
		queryClient.invalidateQueries([MENU_QUERY_KEY.FETCH_GET_MENU]);
		closeDialogDeleteOneNote();
	};

	const mutationFn = () => deleteOneNoteService(noteID);
	const { mutate, isLoading } = useMutation(mutationFn, { onSuccess });

	const onClose = !isLoading ? closeDialogDeleteOneNote : () => "";

	return (
		<DialogDeleteOneNoteView
			{...{
				isOpenDialogDeleteOneNote,
				closeDialogDeleteOneNote,
				mutate,
				isLoading,
				onClose,
			}}
		/>
	);
};

export default memo(DialogDeleteOneNote);
