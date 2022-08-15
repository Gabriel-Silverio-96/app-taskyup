import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaQuery, useTheme } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo, useMemo } from "react";
import { useForm } from "react-hook-form";
import api from "shared/services/api";
import DialogNewBoardView from "./DialogNewBoardView";
import schema from "./shared/schema";
import { IDialogNewBoard, IDialogNewBoardForm } from "./types/DialogNewBoard.component";

const DialogNewBoard: React.FC<IDialogNewBoard> = ({ openDialog, closeDialogNewBoard }) => {
	const theme = useTheme();
	const queryClient = useQueryClient();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const { register, handleSubmit,	formState: { errors }, reset }  
		= useForm({ resolver: yupResolver(schema), mode: "all" });	
		
	useMemo(() => !openDialog && reset(), [openDialog]);

	const mutationDialogNewBoard = async (dataNewBoard: IDialogNewBoardForm) => {
		const { data } = await api.post("board/create", dataNewBoard);
		closeDialogNewBoard();
		return data;
	};

	const { mutate: fetchDialogNewBoard, isLoading: isSaving } = useMutation(mutationDialogNewBoard, {
		onSuccess: () => queryClient.invalidateQueries(["board"])			
	});
		
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
				isSaving
			}}
		/>
	);
};

export default memo(DialogNewBoard);
