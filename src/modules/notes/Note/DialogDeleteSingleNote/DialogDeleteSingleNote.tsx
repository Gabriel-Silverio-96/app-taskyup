import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import api from "shared/services/api";
import { useContextNote } from "../Context";
import useDialogNote from "../shared/hook/useDialogNote";
import DialogDeleteSingleNoteView from "./DialogDeleteSingleNoteView";

const DialogDeleteSingleNote: React.FC = () => {
	const queryClient = useQueryClient();
	const { isOpenDialogDeleteSingleNote, noteID } = useContextNote();
	const { closeDialogDeleteSingleNote } = useDialogNote();

	const mutatioDialogDeleteSingleNote = async () => {
		const { data } = await api.delete(`notes/delete-this/note_id=${noteID}`);
		closeDialogDeleteSingleNote();
		return data;
	};

	const { mutate: fetchDeleteThisNote, isLoading: isDeleting } = useMutation(
		mutatioDialogDeleteSingleNote,
		{
			onError: () => closeDialogDeleteSingleNote(),
			onSuccess: () => queryClient.invalidateQueries(["notes"]),
		}
	);

	return (
		<DialogDeleteSingleNoteView
			{...{
				isOpenDialogDeleteSingleNote,
				closeDialogDeleteSingleNote,
				fetchDeleteThisNote,
				isDeleting
			}}
		/>
	);
};

export default memo(DialogDeleteSingleNote);
