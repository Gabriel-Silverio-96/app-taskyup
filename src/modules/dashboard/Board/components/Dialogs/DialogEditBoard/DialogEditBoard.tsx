import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaQuery, useTheme } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useBoardContext } from "modules/dashboard/Board/Context";
import DialogEditBoardView from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/DialogEditBoardView";
import {
	DIALOG_EDIT_BOARD_QUERY_KEY,
	DIALOG_EDIT_BOARD_SCHEMA,
	ERROR_MESSAGE_UPDATE_BOARD,
} from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/dialog-edit-board.constants";
import { patchBoardService } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/services";
import { getOneBoardService } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/services/get-one-board.service";
import type { IGetOneBoardResponse } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/services/types";
import type { IDialogEditBoardForm } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/types";
import { invalidateBoardRelatedQueries } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/utils";
import { useDialogBoard } from "modules/dashboard/Board/shared/hook/useDialogBoard";
import { memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import useSnackbar from "shared/common/hook/useSnackbar";
import { dateFormat } from "shared/utils/date-format";
import { defineValueCreatedAt } from "shared/utils/define-value-created-at";

const DialogEditBoard = () => {
	const theme = useTheme();
	const queryClient = useQueryClient();
	const { snackbarError } = useSnackbar();
	const {
		boardID,
		isOpenDialogEditBoard,
		dialogBackgroundImage,
		setDialogBackgroundImage,
	} = useBoardContext();

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
		resolver: yupResolver(DIALOG_EDIT_BOARD_SCHEMA),
		mode: "all",
	});

	const onSuccessQuery = (data: IGetOneBoardResponse) => {
		setValue("title", data.title);
		setValue("created_at", dateFormat(data.created_at));
		setDialogBackgroundImage(data.background_image);
	};

	const optionsQuery = {
		onSuccess: onSuccessQuery,
		retry: false,
		enabled: false,
	};

	const queryFn = () => getOneBoardService(boardID);

	const { isFetching, refetch } = useQuery(
		[DIALOG_EDIT_BOARD_QUERY_KEY.FETCH_GET_ONE_BOARD],
		queryFn,
		optionsQuery
	);

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
			await invalidateBoardRelatedQueries(queryClient);
		} catch (error) {
			snackbarError({ message: ERROR_MESSAGE_UPDATE_BOARD });
		}
	};

	const mutationFn = ({ title }: IDialogEditBoardForm) => {
		return patchBoardService(boardID, {
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

	const valueCreatedAt = defineValueCreatedAt(getValues("created_at"));

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
				valueCreatedAt,
			}}
		/>
	);
};

export default memo(DialogEditBoard);
