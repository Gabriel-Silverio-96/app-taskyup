import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaQuery, useTheme } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IFetchSingleBoard } from "shared/common/types/Fetch";
import dateFormat from "shared/util/dateFormat";
import { useContextBoard } from "../Context";
import useDialogBoard from "../shared/hook/useDialogBoard";
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
	} = useForm({ resolver: yupResolver(schema), mode: "all" });

	const onSuccessQuery = (data: IFetchSingleBoard) => {
		setValue("title", data.title);
		setValue("created_at", dateFormat(data.created_at));
		setDialogBackgroundImage(data.background_image);
	};
	const optionQuery = {
		onSuccess: onSuccessQuery,
		cacheTime: 0,
		retry: false,
		enabled: false,
	};

	const { refetch, isFetching: isLoading } = useQuery(
		["dialog_edit_board"],
		() => fetchSingleBoard(boardID),
		optionQuery
	);

	useEffect(() => {
		if (isOpenDialogEditBoard) {
			refetch();
		}
		return () => setDialogBackgroundImage("");
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
	const optionMutation = { onSuccess: onSuccessMutation };

	const mutationFetchEditBoard = async (dataEdited: IDialogEditBoardForm) => {
		await fetchEditBoard(dataEdited, boardID, dialogBackgroundImage);
	};

	const { mutate: fetchDialogEditBoard, isLoading: isSaving } = useMutation(
		mutationFetchEditBoard, optionMutation		
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
