import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaQuery, useTheme } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { BOARD_QUERY_KEY, MENU_QUERY_KEY } from "shared/constants";
import DialogNewBoardView from "shared/components/Drawer/components/Aside/components/DialogNewBoard/DialogNewBoardView";
import { postBoardService } from "shared/components/Drawer/components/Aside/components/DialogNewBoard/services";
import { DialogNewBoardSchema } from "shared/components/Drawer/components/Aside/components/DialogNewBoard/dialog-new-board.constants";
import type {
	IDialogNewBoard,
	IDialogNewBoardForm,
} from "shared/components/Drawer/components/Aside/components/DialogNewBoard/types";

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
		resolver: yupResolver(DialogNewBoardSchema),
		mode: "all",
	});

	useEffect(() => {
		return () => reset();
	}, [openDialog]);

	const mutationFn = (form: IDialogNewBoardForm) =>
		postBoardService({ body: form });

	const onSuccess = async () => {
		closeDialogNewBoard();
		await Promise.all([
			queryClient.invalidateQueries([BOARD_QUERY_KEY.FETCH_GET_BOARDS]),
			queryClient.invalidateQueries([MENU_QUERY_KEY.FETCH_GET_MENU]),
		]);
	};

	const { mutate, isLoading } = useMutation(mutationFn, { onSuccess });

	return (
		<DialogNewBoardView
			{...{
				register,
				fullScreen,
				openDialog,
				closeDialogNewBoard,
				handleSubmit,
				mutate,
				errors,
				isLoading,
			}}
		/>
	);
};

export default memo(DialogNewBoard);
