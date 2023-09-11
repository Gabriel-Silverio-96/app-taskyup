import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaQuery, useTheme } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import api from "shared/services/api";
import DialogNewBoardView from "./DialogNewBoardView";
import schema from "./shared/schema";
import {
	IDialogNewBoard,
	IDialogNewBoardForm,
} from "./types/DialogNewBoard.component";
import { BOARD_QUERY_KEY } from "shared/services/constants/dashboard";
import { ASIDE_QUERY_KEY } from "shared/components/Drawer/Aside/constants";

const DialogNewBoard: React.FC<IDialogNewBoard> = ({
	openDialog,
	closeDialogNewBoard,
}) => {
	const theme = useTheme();
	const queryClient = useQueryClient();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ resolver: yupResolver(schema), mode: "all" });

	useEffect(() => {
		return () => reset();
	}, [openDialog]);

	const mutationDialogNewBoard = async (
		dataNewBoard: IDialogNewBoardForm
	) => {
		const { data } = await api.post("board/create", dataNewBoard);
		closeDialogNewBoard();
		return data;
	};

	const onSuccess = () =>
		Promise.all([
			queryClient.invalidateQueries([BOARD_QUERY_KEY.FETCH_GET_BOARDS]),
			queryClient.invalidateQueries([ASIDE_QUERY_KEY.FETCH_GET_MENU]),
		]);

	const { mutate: fetchDialogNewBoard, isLoading: isSaving } = useMutation(
		mutationDialogNewBoard,
		{
			onSuccess,
		}
	);

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
				isSaving,
			}}
		/>
	);
};

export default memo(DialogNewBoard);
