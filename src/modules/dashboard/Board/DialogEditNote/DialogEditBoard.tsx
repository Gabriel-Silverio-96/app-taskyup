import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaQuery, useTheme } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import React, { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { useContextBoard } from "../Context";
import useDialogBoard from "../shared/hook/useDialogBoard";
import DialogEditBoardView from "./DialogEditBoardView";
import schema from "./shared/schema";
import { IDialogEditBoardForm } from "./types/DialogEditBoard.component";

const DialogEditBoard: React.FC<any> = () => {
	const theme = useTheme();
	const queryClient = useQueryClient();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const { boardID, isOpenDialogEditBoard } = useContextBoard();
	const { closeDialogEditBoard } = useDialogBoard();
	
	const [ isLoading, setIsLoading ] = useState(false);
		
	const { register, handleSubmit,	formState: { errors } }  
		= useForm({ resolver: yupResolver(schema), mode: "all" });	
	
	const fetchDialogEditBoard = async (dataEditBoard: IDialogEditBoardForm) => {
		try {	
			setIsLoading(true);
			await api.patch(`board/edit/board_id=${boardID}`, dataEditBoard) as AxiosResponse<IFetchResponseDefault>;
			queryClient.invalidateQueries(["board"]);			
		} catch (error) {
			console.error("DialogEditBoard ", error);			
		} finally {
			setIsLoading(false);			
		}
	};	
	
	return (
		<DialogEditBoardView
			{...{
				register,
				fullScreen,
				handleSubmit,
				fetchDialogEditBoard,
				errors,
				isLoading,
				isOpenDialogEditBoard,
				closeDialogEditBoard,
			}}
		/>
	);
};

export default memo(DialogEditBoard);
