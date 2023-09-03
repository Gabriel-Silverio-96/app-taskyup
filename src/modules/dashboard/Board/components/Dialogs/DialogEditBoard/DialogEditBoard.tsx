import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaQuery, useTheme } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IFetchGetSingleBoard } from "shared/common/types/Fetch";
import dateFormat from "shared/util/dateFormat";
import { useContextBoard } from "modules/dashboard/Board/Context";
import useDialogBoard from "modules/dashboard/Board/shared/hook/useDialogBoard";
import DialogEditBoardView from "./DialogEditBoardView";
import schema from "./schema";
import { fetchPatchBoardService, fetchGetOneBoardService } from "./service";
import { IDialogEditBoardForm } from "./types";
import useSnackBar from "shared/common/hook/useSnackBar";
import { BOARD_QUERY_KEY } from "shared/services/constants/dashboard";

export const MESSAGE_ERROR_UPDATE_BOARD =
	"There was an error and it was not possible to update the board";

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
	} = useForm({ resolver: yupResolver(schema), mode: "all" });

	const onSuccessQuery = (data: IFetchGetSingleBoard) => {
		setValue("title", data.title);
		setValue("created_at", dateFormat(data.created_at));
		setDialogBackgroundImage(data.background_image);
	};

	const optionsQuery = {
		onSuccess: onSuccessQuery,
		retry: false,
		enabled: false,
	};
	const queryKey = ["dialog_edit_board"];
	const queryFn = () => fetchGetOneBoardService(boardID);

	const { refetch, isFetching: isLoading } = useQuery(
		queryKey,
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
			await Promise.all([
				queryClient.invalidateQueries([
					BOARD_QUERY_KEY.FETCH_GET_BOARDS,
				]),
				queryClient.invalidateQueries(["menu"]),
				queryClient.invalidateQueries(["get_single_board"]),
				queryClient.invalidateQueries(["texts"]),
			]);
		} catch (error) {
			snackBarError({ message: MESSAGE_ERROR_UPDATE_BOARD });
		}
	};

	const mutationFn = (form: IDialogEditBoardForm) =>
		fetchPatchBoardService({
			form,
			background_image: dialogBackgroundImage,
			boardID,
		});

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
