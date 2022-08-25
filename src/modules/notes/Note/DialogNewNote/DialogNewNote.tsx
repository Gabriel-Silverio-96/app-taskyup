import { useMediaQuery, useTheme } from "@mui/material";
import React, { memo } from "react";
import { useForm } from "react-hook-form";
import DialogNewNoteView from "./DialogNewNoteView";

const DialogNewNote: React.FC = () => {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const { register, handleSubmit, formState: { errors }, reset } = useForm({mode: "all"});

	const fetchDialogNewBoard = (data: any) => {
		console.log(data);
	};

	const submit = handleSubmit(fetchDialogNewBoard);

	return <DialogNewNoteView {...{ fullScreen, register, submit }}/>;
};

export default memo(DialogNewNote);