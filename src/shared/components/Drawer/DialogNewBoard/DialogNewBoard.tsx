import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaQuery, useTheme } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import React, { memo, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import api from "shared/services/api";
import DialogNewBoardView from "./DialogNewBoardView";
import schema from "./shared/schema";
import { IDialogNewBoard, IDialogNewBoardForm } from "./types/DialogNewBoard.component";

const DialogNewBoard: React.FC<IDialogNewBoard> = ({ openDialog, closeDialogNewBoard }) => {
	const theme = useTheme();
	const queryClient = useQueryClient();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const [ isLoading, setIsLoading ] = useState(false);

	const { register, handleSubmit,	formState: { errors }, reset }  
		= useForm({ resolver: yupResolver(schema), mode: "all" });	
		
	useMemo(() => !openDialog && reset(), [openDialog]);

	const fetchDialogNewBoard = async (dataNewBoard: IDialogNewBoardForm) => {
		try {	
			setIsLoading(true);
			await api.post("board/create", dataNewBoard) as any;
			queryClient.invalidateQueries(["board"]);			
			closeDialogNewBoard();
		} catch (error) {
			console.error("DialogNewBoard ", error);			
		} finally {
			setIsLoading(false);
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
				isLoading
			}}
		/>
	);
};

export default memo(DialogNewBoard);
