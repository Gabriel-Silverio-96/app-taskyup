import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaQuery, useTheme } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IFetchSingleBoard } from "shared/common/types/Fetch";
import api from "shared/services/api";
import dateFormat from "shared/util/dateFormat";
import { useContextBoard } from "../Context";
import useDialogBoard from "../shared/hook/useDialogBoard";
import DialogEditBoardView from "./DialogEditBoardView";
import schema from "./schema";
import { IDialogEditBoardForm } from "./types/DialogEditBoard.component";

const DialogEditBoard = () => {
	const theme = useTheme();
	const queryClient = useQueryClient();
	const { boardID, isOpenDialogEditBoard } = useContextBoard();
	
	const { closeDialogEditBoard } = useDialogBoard();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
	
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm({ resolver: yupResolver(schema), mode: "all" });

	const fetchSingleBoard = async () => {
		const { data } = await api.get(`/board/board_id=${boardID}`);
		return data;
	};

	const onSuccess = (data: IFetchSingleBoard) => {
		setValue("title", data.title);
		setValue("created_at", dateFormat(data.created_at));
		// setBackgroundImage(data.background_image);
	};

	const { refetch, isFetching: isLoading } = useQuery<IFetchSingleBoard>(
		["dialog_edit_board"],
		fetchSingleBoard,
		{ cacheTime: 0, onSuccess, retry: false, enabled: false }
	);

	useEffect(() => {
		if(isOpenDialogEditBoard) {
			refetch();
		}
		// return () => setBackgroundImage("");		
	}, [isOpenDialogEditBoard]);
	
	const { mutate: fetchDialogEditBoard, isLoading: isSaving } = useMutation(
		async (dataEditBoard: IDialogEditBoardForm) => {
			await api.patch(`board/edit/board_id=${boardID}`, dataEditBoard);
			queryClient.invalidateQueries(["board"]);
			closeDialogEditBoard();
		}
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
