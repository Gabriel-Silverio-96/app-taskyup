import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaQuery, useTheme } from "@mui/material";
import React, { memo } from "react";
import { useForm } from "react-hook-form";
import { IDialogNewNoteForm } from "../shared/types";
import DialogNewNoteView from "./DialogNewNoteView";
import schema from "./schema";

const DialogNewNote: React.FC = () => {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IDialogNewNoteForm>({
		resolver: yupResolver(schema),	
		mode: "all",
		defaultValues: {
			color_note: theme.palette.primary.main
		}
	});

	const fetchDialogNewBoard = (dataNewNote: IDialogNewNoteForm) => {
		console.log(dataNewNote);
	};	
	const submit = handleSubmit(fetchDialogNewBoard);

	return <DialogNewNoteView {...{ fullScreen, register, submit, errors }} />;
};

export default memo(DialogNewNote);
