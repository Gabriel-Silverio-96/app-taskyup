import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaQuery, useTheme } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import dateFormat from "shared/util/dateFormat";
import { useContextNote } from "../../Context";
import useDialogNote from "../../shared/hook/useDialogNote";
import { IDialogNoteForm } from "../../shared/types";
import DialogEditNoteView from "./DialogEditNoteView";
import schema from "./schema";
import { fetchEditNote, fetchSingleNote } from "./service";
import { IFetchSingleNote } from "./types/DialogEditNote.component";

const DialogEditNote: React.FC = () => {
	const theme = useTheme();
	const { board_id: boardID } = useParams();
	
	const queryClient = useQueryClient();
	const { isOpenDialogEditNote, noteID } = useContextNote();
	const { closeDialogEditNote } = useDialogNote();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
		reset,
	} = useForm<IDialogNoteForm>({
		resolver: yupResolver(schema),
		mode: "all",
	});

	const onSuccessQuery = (data: IFetchSingleNote) => {
		setValue("color_note", data.color_note);
		setValue("title_note", data.title_note);
		setValue("observation", data.observation);
		setValue("note_created_at", dateFormat(data.created_at));
	};

	const queryKey = ["dialog_edit_note"];
	const queryFn = () => fetchSingleNote(noteID);
	const optionsQuery = { onSuccess: onSuccessQuery, retry: false, enabled: false };

	const { refetch, isFetching: isLoading } = useQuery<IFetchSingleNote>(queryKey, queryFn, optionsQuery);

	useEffect(() => {
		if(isOpenDialogEditNote) refetch();

		return () => reset();
	}, [isOpenDialogEditNote]);

	const onSuccessMutation = () => {
		queryClient.invalidateQueries(["notes"]);
		closeDialogEditNote();
	};
	
	const mutationFn = (form: IDialogNoteForm) => fetchEditNote({ form, noteID, boardID });
	const optionsMutation = { onSuccess: onSuccessMutation };

	const { mutate: fetchDialogEditNote, isLoading: isSaving } = useMutation(mutationFn, optionsMutation);

	return (
		<DialogEditNoteView
			{...{
				fullScreen, 
				register, 
				handleSubmit,
				fetchDialogEditNote,
				errors, 
				closeDialogEditNote, 
				isOpenDialogEditNote, 
				isLoading, 
				isSaving
			}}
		/>
	);
};

export default memo(DialogEditNote);
