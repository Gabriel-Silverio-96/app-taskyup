import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaQuery, useTheme } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import api from "shared/services/api";
import { IDialogNewNoteForm } from "../shared/types";
import DialogNewNoteView from "./DialogNewNoteView";
import schema from "./schema";

const DialogNewNote: React.FC = () => {
	const theme = useTheme();
	const queryClient = useQueryClient();
	const { board_id: boardID } = useParams();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const { register, handleSubmit, 
		formState: { errors }, reset } = useForm<IDialogNewNoteForm>({
			resolver: yupResolver(schema),	
			mode: "all",
			defaultValues: {
				color_note: theme.palette.primary.main
			}
		});

	const mutationDialogNewBoard = async (dataNewNote: IDialogNewNoteForm) => {
		const { data } = await api.post(`notes/create/board_id=${boardID}`, dataNewNote);
		return data;
	};	
	
	const { mutate: fetchDialogNewBoard, isLoading: isSaving } = useMutation(mutationDialogNewBoard, {
		onSuccess: () => queryClient.invalidateQueries(["notes"])
	});	

	return <DialogNewNoteView {...{ fullScreen, register, handleSubmit, fetchDialogNewBoard, errors, isSaving }} />;
};

export default memo(DialogNewNote);
