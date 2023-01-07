import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import React, { memo } from "react";
import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { useContextBoard } from "../Context";
import useDialogBoard from "../shared/hook/useDialogBoard";
import DialogDeleteSingleBoardView from "./DialogDeleteSingleBoardView";

const DialogDeleteSingleBoard: React.FC = () => {
	const queryClient = useQueryClient();
	const { isOpenDialogDeleteSingleBoard, boardID } = useContextBoard();
	const { closeDialogDeleteSingleBoard } = useDialogBoard();
	
	const mutationDialogDeleteSingleBoard = async () => {
		const { data } = await api.delete(`board/delete/board_id=${boardID}`) as AxiosResponse<IFetchResponseDefault>;		
		closeDialogDeleteSingleBoard();
		return data;
	};

	const onSuccess = () => Promise.all([
		queryClient.invalidateQueries(["board"]),
		queryClient.invalidateQueries(["menu"])
	]);
	
	const { mutate: fetchDialogDeleteSingleBoard, isLoading: isDeleting } = useMutation(
		mutationDialogDeleteSingleBoard, { onError: () => closeDialogDeleteSingleBoard(), onSuccess }
	);

	return (
		<DialogDeleteSingleBoardView
			{...{
				isOpenDialogDeleteSingleBoard,
				closeDialogDeleteSingleBoard,
				fetchDialogDeleteSingleBoard,
				isDeleting
			}}
		/>
	);
};

export default memo(DialogDeleteSingleBoard);
