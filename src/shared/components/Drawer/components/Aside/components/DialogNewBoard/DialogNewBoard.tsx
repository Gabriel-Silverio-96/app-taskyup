import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaQuery, useTheme } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ASIDE_QUERY_KEY } from "shared/components/Drawer/components/Aside/constants";
import { BOARD_QUERY_KEY } from "shared/services/constants/dashboard";
import DialogNewBoardView from "./DialogNewBoardView";
import { fetchPostBoardService } from "shared/components/Drawer/components/Aside/components/DialogNewBoard/services";
import schema from "./shared/schema";
import { IDialogNewBoard, IDialogNewBoardForm } from "./types";

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
	} = useForm<IDialogNewBoardForm>({
		resolver: yupResolver(schema),
		mode: "all",
	});

	useEffect(() => {
		return () => reset();
	}, [openDialog]);

	const mutationFn = (form: IDialogNewBoardForm) =>
		fetchPostBoardService({ body: form });

	const onSuccess = async () => {
		closeDialogNewBoard();
		await Promise.all([
			queryClient.invalidateQueries([BOARD_QUERY_KEY.FETCH_GET_BOARDS]),
			queryClient.invalidateQueries([ASIDE_QUERY_KEY.FETCH_GET_MENU]),
		]);
	};

	const { mutate: handleSubmitCreateBoard, isLoading } = useMutation(
		mutationFn,
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
				handleSubmitCreateBoard,
				errors,
				isLoading,
			}}
		/>
	);
};

export default memo(DialogNewBoard);
