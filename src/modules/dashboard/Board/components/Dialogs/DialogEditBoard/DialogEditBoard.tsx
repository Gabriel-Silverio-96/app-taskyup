import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaQuery, useTheme } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContextBoard } from "modules/dashboard/Board/Context";
import { useDialogBoard } from "modules/dashboard/Board/shared/hook/useDialogBoard";
import { memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import useFetchGetOneBoard, {
	HOOK_FETCH_BOARD_QUERY_KEY,
} from "shared/common/hook/useFetchGetOneBoard/useFetchGetOneBoard";
import useSnackBar from "shared/common/hook/useSnackBar";
import { IFetchGetOneBoardResponse } from "shared/common/hook/useFetchGetOneBoard/types";
import { ASIDE_QUERY_KEY } from "shared/components/Drawer/components/Aside/constants";
import { BOARD_QUERY_KEY } from "shared/services/constants/dashboard";
import { TEXT_QUERY_KEY } from "shared/services/constants/texts";
import dateFormat from "shared/util/dateFormat";
import DialogEditBoardView from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/DialogEditBoardView";
import { ERROR_MESSAGE_UPDATE_BOARD } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/constants";
import { DialogEditBoardSchema } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/schema";
import { fetchPatchBoardService } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/services";
import { IDialogEditBoardForm } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/types";

const DialogEditBoard = () => {
	const theme = useTheme();
	const queryClient = useQueryClient();
	const { snackBarError } = useSnackBar();
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

	const { refetch, isFetching: isLoading } = useFetchGetOneBoard(
		boardID,
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
			await Promise.all([
				queryClient.invalidateQueries([
					BOARD_QUERY_KEY.FETCH_GET_BOARDS,
				]),
				queryClient.invalidateQueries([ASIDE_QUERY_KEY.FETCH_GET_MENU]),
				queryClient.invalidateQueries([
					HOOK_FETCH_BOARD_QUERY_KEY.FETCH_GET_ONE_BOARD,
				]),
				queryClient.invalidateQueries([
					TEXT_QUERY_KEY.FETCH_GET_ALL_TEXTS,
				]),
			]);
		} catch (error) {
			snackBarError({ message: ERROR_MESSAGE_UPDATE_BOARD });
		}
	};

	const mutationFn = ({ title }: IDialogEditBoardForm) => {
		return fetchPatchBoardService(boardID, {
			title,
			background_image: dialogBackgroundImage,
		});
	};

	const optionsMutation = { onSuccess: onSuccessMutation };

	const { mutate: dialogEditBoardSubmit, isLoading: isSaving } = useMutation(
		mutationFn,
		optionsMutation
	);

	const onClose = !isSaving && !isLoading ? closeDialogEditBoard : () => "";
	const disabledIconButtonClose = isLoading || isSaving;

	return (
		<DialogEditBoardView
			{...{
				register,
				fullScreen,
				handleSubmit,
				dialogEditBoardSubmit,
				errors,
				isLoading,
				isSaving,
				isOpenDialogEditBoard,
				closeDialogEditBoard,
				onClose,
				disabledIconButtonClose,
			}}
		/>
	);
};

export default memo(DialogEditBoard);
