import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useParams } from "react-router-dom";
import api from "shared/services/api";
import { useContextNote } from "../Context";
import useDialogNote from "../shared/hook/useDialogNote";
import DialogDeleteAllNotesView from "./DialogDeleteAllNotesView";

const DialogDeleteAllNotes: React.FC = () => {
	const queryClient = useQueryClient();
	const { board_id: boardID } = useParams();
	const { isOpenDialogDeleteAllNotes } = useContextNote();
	const { closeDialogDeleteAllNotes } = useDialogNote();

	const mutationDialogDeleteAllNotes = async () => {
		const { data } = await api.delete(`notes/delete-all/board_id=${boardID}`);
		closeDialogDeleteAllNotes();
		return data;
	};

	const { mutate: fetchDeleteAllNotes, isLoading: isDeleting } = useMutation(
		mutationDialogDeleteAllNotes,
		{
			onError: () => closeDialogDeleteAllNotes(),
			onSuccess: () => queryClient.invalidateQueries(["notes"]),
		}
	);

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
