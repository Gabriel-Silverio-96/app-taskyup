import { useMediaQuery, useTheme } from "@mui/material";
import React, { memo } from "react";
import { useForm } from "react-hook-form";
import { IDialogNewNoteForm } from "../shared/types";
import DialogNewNoteView from "./DialogNewNoteView";

const DialogNewNote: React.FC = () => {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const { register, handleSubmit, formState: { errors }, reset } = useForm<IDialogNewNoteForm>({mode: "all"});

	const fetchDialogNewBoard = (dataNewNote: IDialogNewNoteForm) => {
		console.log(dataNewNote);
	};

	const submit = handleSubmit(fetchDialogNewBoard);

	return <DialogNewNoteView {...{ fullScreen, register, submit }}/>;
};

export default memo(DialogNewNote);