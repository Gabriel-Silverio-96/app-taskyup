import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaQuery, useTheme } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContextBoard } from "modules/dashboard/Board/Context";
import DialogEditBoardView from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/DialogEditBoardView";
import { ERROR_MESSAGE_UPDATE_BOARD } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/constants";
import { DialogEditBoardSchema } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/schema";
import { fetchPatchBoardService } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/services";
import { IDialogEditBoardForm } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/types";
import { useDialogBoard } from "modules/dashboard/Board/shared/hook/useDialogBoard";
import { memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IFetchGetOneBoardResponse } from "shared/common/hook/useFetchGetOneBoard/types";
import useFetchGetOneBoard from "shared/common/hook/useFetchGetOneBoard/useFetchGetOneBoard";
import useSnackbar from "shared/common/hook/useSnackbar";
import {
	BOARD_QUERY_KEY,
	MENU_QUERY_KEY,
	NOTE_QUERY_KEY,
	TEXT_QUERY_KEY,
} from "shared/constants";
import { dateFormat } from "shared/utils/dateFormat";

const DialogEditBoard = () => {
	const theme = useTheme();
	const queryClient = useQueryClient();
	const { snackbarError } = useSnackbar();
	const {
		boardID,
		isOpenDialogEditBoard,
		dialogBackgroundImage,
		setDialogBackgroundImage,
	} = useContextBoard();

	const { closeDialogEditBoard } = useDialogBoard();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		clearErrors,
		getValues,
	} = useForm<IDialogEditBoardForm>({
		resolver: yupResolver(DialogEditBoardSchema),
		mode: "all",
	});

	const onSuccessQuery = (data: IFetchGetOneBoardResponse) => {
		setValue("title", data.title);
		setValue("created_at", dateFormat(data.created_at));
		setDialogBackgroundImage(data.background_image);
	};

	const optionsQuery = {
		onSuccess: onSuccessQuery,
		retry: false,
		enabled: false,
	};

	const { refetch, isFetching } = useFetchGetOneBoard(boardID, optionsQuery);

	useEffect(() => {
		if (isOpenDialogEditBoard) refetch();

		return () => {
			clearErrors();
			setDialogBackgroundImage("");
		};
	}, [isOpenDialogEditBoard]);

	const onSuccessMutation = async () => {
		try {
			closeDialogEditBoard();
			await Promise.all([
				queryClient.invalidateQueries([
					BOARD_QUERY_KEY.FETCH_GET_BOARDS,
				]),
				queryClient.invalidateQueries([MENU_QUERY_KEY.FETCH_GET_MENU]),
				queryClient.invalidateQueries([NOTE_QUERY_KEY.FETCH_GET_NOTES]),
				queryClient.invalidateQueries([
					TEXT_QUERY_KEY.FETCH_GET_ALL_TEXTS,
				]),
			]);
		} catch (error) {
			snackbarError({ message: ERROR_MESSAGE_UPDATE_BOARD });
		}
	};

	const mutationFn = ({ title }: IDialogEditBoardForm) => {
		return fetchPatchBoardService(boardID, {
			title,
			background_image: dialogBackgroundImage,
		});
	};

	const optionsMutation = { onSuccess: onSuccessMutation };

	const { mutate, isLoading: isSaving } = useMutation(
		mutationFn,
		optionsMutation
	);

	const onClose = !isSaving && !isFetching ? closeDialogEditBoard : () => "";
	const disabledIconButtonClose = isFetching || isSaving;

	const defineValueCreatedAt = getValues("created_at")
		? dateFormat(getValues("created_at"))
		: "";

	return (
		<DialogEditBoardView
			{...{
				register,
				fullScreen,
				handleSubmit,
				mutate,
				errors,
				isFetching,
				isSaving,
				isOpenDialogEditBoard,
				closeDialogEditBoard,
				onClose,
				disabledIconButtonClose,
				defineValueCreatedAt,
			}}
		/>
	);
};

export default memo(DialogEditBoard);
