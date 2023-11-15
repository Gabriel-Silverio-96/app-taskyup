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
import { IFetchGetOneBoardResponse } from "shared/common/types/Fetch";
import { ASIDE_QUERY_KEY } from "shared/components/Drawer/components/Aside/constants";
import { BOARD_QUERY_KEY } from "shared/services/constants/dashboard";
import { TEXT_QUERY_KEY } from "shared/services/constants/texts";
import dateFormat from "shared/util/dateFormat";
import DialogEditBoardView from "./DialogEditBoardView";
import { ERROR_MESSAGE_UPDATE_BOARD } from "./constants/DialogEditBoard.constants";
import schema from "./schema";
import { IDialogEditBoardForm } from "./types";
import { fetchPatchBoardService } from "./services/fetchPatchBoardService";

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
		resolver: yupResolver(schema),
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
			}}
		/>
	);
};

export default memo(DialogEditBoard);
