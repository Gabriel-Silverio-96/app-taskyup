import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaQuery, useTheme } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IFetchSingleBoard } from "shared/common/types/Fetch";
import dateFormat from "shared/util/dateFormat";
import { useContextBoard } from "../../Context";
import useDialogBoard from "../../shared/hook/useDialogBoard";
import DialogEditBoardView from "./DialogEditBoardView";
import schema from "./schema";
import { fetchEditBoard, fetchSingleBoard } from "./service";
import { IDialogEditBoardForm } from "./types/DialogEditBoard.component";

const DialogEditBoard = () => {
	const theme = useTheme();
	const queryClient = useQueryClient();
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
		clearErrors
	} = useForm({ resolver: yupResolver(schema), mode: "all" });

	const onSuccessQuery = (data: IFetchSingleBoard) => {
		setValue("title", data.title);
		setValue("created_at", dateFormat(data.created_at));
		setDialogBackgroundImage(data.background_image);
	};

	const optionsQuery = { onSuccess: onSuccessQuery, retry: false,	enabled: false };
	const queryKey = ["dialog_edit_board"];
	const queryFn = () => fetchSingleBoard(boardID);

	const { refetch, isFetching: isLoading } = useQuery(queryKey, queryFn, optionsQuery);

	useEffect(() => {
		if (isOpenDialogEditBoard) refetch();

		return () => {
			clearErrors();
			setDialogBackgroundImage("");
		};
	}, [isOpenDialogEditBoard]);

	const onSuccessMutation = () => {
		Promise.all([
			queryClient.invalidateQueries(["board"]),
			queryClient.invalidateQueries(["menu"]),
			queryClient.invalidateQueries(["single_board"]),
			queryClient.invalidateQueries(["texts"]),
		]);
		closeDialogEditBoard();
	};

	const mutationFn = (form: IDialogEditBoardForm) =>
		fetchEditBoard({ form, background_image: dialogBackgroundImage, boardID });

	const optionsMutation = { onSuccess: onSuccessMutation };

	const { mutate: fetchDialogEditBoard, isLoading: isSaving } = useMutation(
		mutationFn,
		optionsMutation
	);

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