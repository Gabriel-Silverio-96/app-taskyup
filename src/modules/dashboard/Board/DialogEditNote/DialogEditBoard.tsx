import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaQuery, useTheme } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { memo, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "shared/services/api";
import { useContextBoard } from "../Context";
import useDialogBoard from "../shared/hook/useDialogBoard";
import DialogEditBoardView from "./DialogEditBoardView";
import schema from "./shared/schema";
import { IDialogEditBoardForm, IFetchUniqueBoard } from "./types/DialogEditBoard.component";

const DialogEditBoard = () => {
	const theme = useTheme();
	const queryClient = useQueryClient();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const { boardID, isOpenDialogEditBoard } = useContextBoard();
	const { closeDialogEditBoard } = useDialogBoard();
	const [ isLoading, setIsLoading ] = useState(false);
	const { 
		register, 
		handleSubmit, 
		formState: { errors }, 
		setValue 
	} = useForm({ resolver: yupResolver(schema), mode: "all" });

	const fetchUniqueBoard = async () => {				
		try {			
			setIsLoading(true);
			const { data } = await api.get(`/board/board_id=${boardID}`) as AxiosResponse<IFetchUniqueBoard>;
			setValue("title", data.title);			
		} catch (error) {
			console.log("fetchUniqueBoard ", error);			
		} finally {
			setIsLoading(false);
		}
	};
	useEffect(() => {isOpenDialogEditBoard && fetchUniqueBoard();}, [isOpenDialogEditBoard]);

	const { mutate: fetchDialogEditBoard, isLoading: isSaving } = useMutation(
		async (dataEditBoard: IDialogEditBoardForm) => {
			await api.patch(`board/edit/board_id=${boardID}`, dataEditBoard);
			queryClient.invalidateQueries(["board"]);	
			closeDialogEditBoard();		
		});
	
	return (
		<DialogEditBoardView
			{...{
				register,
				fullScreen,
				handleSubmit,
				fetchDialogEditBoard,				
				errors,
				isLoading,
				isSaving,
				isOpenDialogEditBoard,
				closeDialogEditBoard,
			}}			
		/>
	);
};

export default memo(DialogEditBoard);
