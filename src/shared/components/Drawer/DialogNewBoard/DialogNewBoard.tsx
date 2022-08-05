import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaQuery, useTheme } from "@mui/material";
import React, { memo, useMemo } from "react";
import { useForm } from "react-hook-form";
import api from "shared/services/api";
import DialogNewBoardView from "./DialogNewBoardView";
import schema from "./shared/schema";
import { useQueryClient } from "@tanstack/react-query";

const DialogNewBoard: React.FC<any> = ({ openDialog, closeDialogNewBoard }) => {
	const theme = useTheme();
	const queryClient = useQueryClient();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const { register, handleSubmit,	formState: { errors }, reset }  
		= useForm({ resolver: yupResolver(schema), mode: "all" });	
		
	useMemo(() => !openDialog && reset(), [openDialog]);

	const fetchDialogNewBoard = async (dataNewBoard: any) => {
		try {	
			await api.post("board/create", dataNewBoard) as any;
			queryClient.invalidateQueries(["board"]);
			closeDialogNewBoard();
		} catch (error) {
			console.error("DialogNewBoard ", error);			
		}
	};
		
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
