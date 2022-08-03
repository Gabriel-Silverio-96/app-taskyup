import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaQuery, useTheme } from "@mui/material";
import React, { memo, useMemo } from "react";
import { useForm } from "react-hook-form";
import DialogNewBoardView from "./DialogNewBoardView";
import schema from "./shared/schema";

const DialogNewBoard: React.FC<any> = ({ openDialog, closeDialogNewBoard }) => {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const { register, handleSubmit,	formState: { errors }, reset }  
		= useForm({ resolver: yupResolver(schema), mode: "all" });
	

	const fetchDialogNewBoard = (dataNewBoard: any) => {
		console.log(dataNewBoard);
	};

	const resetForm = () => !openDialog && reset();
	useMemo(resetForm, [openDialog]);

	return (
		<DialogNewBoardView
			{...{
				register,
				fullScreen,
				openDialog,
				closeDialogNewBoard,
				handleSubmit,
				fetchDialogNewBoard,
				errors,
			}}
		/>
	);
};

export default memo(DialogNewBoard);
