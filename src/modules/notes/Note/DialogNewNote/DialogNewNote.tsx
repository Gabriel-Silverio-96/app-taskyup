import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaQuery, useTheme } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useContextNote } from "../Context";
import useDialogNote from "../shared/hook/useDialogNote";
import { IDialogNoteForm } from "../shared/types";
import DialogNewNoteView from "./DialogNewNoteView";
import schema from "./schema";
import fetchCreateNote from "./service";

const DialogNewNote: React.FC = () => {
	const theme = useTheme();
	const { board_id: boardID } = useParams();

	const queryClient = useQueryClient();
	const { isOpenDialogNewNote } = useContextNote();
	const { closeDialogNewNote } = useDialogNote();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IDialogNoteForm>({
		resolver: yupResolver(schema),
		mode: "all",
	});

	useEffect(() => reset(), [isOpenDialogNewNote]);

	const onSuccessMutation = {
		onSuccess: () => {
			queryClient.invalidateQueries(["notes"]);
			closeDialogNewNote();
		}
	};

	const mutationFn = (form: IDialogNoteForm) => fetchCreateNote({ form, boardID });	
	const { mutate: fetchDialogNewNote, isLoading: isSaving } = useMutation(mutationFn, onSuccessMutation);

	return (
		<DialogNewNoteView
			{...{
				fullScreen,
				register,
				handleSubmit,
				fetchDialogNewNote,
				errors,
				isOpenDialogNewNote,
				closeDialogNewNote,
				isSaving,
			}}
		/>
	);
};

export default memo(DialogNewNote);
