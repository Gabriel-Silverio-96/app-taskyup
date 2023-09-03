import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useDialogBoard } from "modules/dashboard/Board/shared/hook/useDialogBoard";
import { useContextBoard } from "modules/dashboard/Board/Context";
import DialogDeleteOneBoardView from "./DialogDeleteOneBoardView";
import { fetchDeleteOneBoardService } from "./service";
import { BOARD_QUERY_KEY } from "shared/services/constants/dashboard";

const DialogDeleteOneBoard: React.FC = () => {
	const queryClient = useQueryClient();
	const { isOpenDialogDeleteSingleBoard, boardID } = useContextBoard();
	const { closeDialogDeleteSingleBoard } = useDialogBoard();

	const onSuccess = () => {
		Promise.all([
			queryClient.invalidateQueries([BOARD_QUERY_KEY.FETCH_GET_BOARDS]),
			queryClient.invalidateQueries(["menu"]),
		]);
		closeDialogDeleteSingleBoard();
	};

	const optionsMutation = { onSuccess };
	const mutationFn = () => fetchDeleteOneBoardService(boardID);

	const { mutate: dialogDeleteOneBoardSubmit, isLoading } = useMutation(
		mutationFn,
		optionsMutation
	);

	return (
		<DialogDeleteOneBoardView
			{...{
				isOpenDialogDeleteSingleBoard,
				closeDialogDeleteSingleBoard,
				dialogDeleteOneBoardSubmit,
				isLoading,
			}}
		/>
	);
};

export default memo(DialogDeleteOneBoard);
