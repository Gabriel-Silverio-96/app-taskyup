import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import useDialogBoard from "modules/dashboard/Board/shared/hook/useDialogBoard";
import { useContextBoard } from "modules/dashboard/Board/Context";
import DialogDeleteOneBoardView from "./DialogDeleteOneBoardView";
import { fetchDeleteOneBoardService } from "./service";

const DialogDeleteSingleBoard: React.FC = () => {
	const queryClient = useQueryClient();
	const { isOpenDialogDeleteSingleBoard, boardID } = useContextBoard();
	const { closeDialogDeleteSingleBoard } = useDialogBoard();
	
	const onSuccess = () => {
		Promise.all([
			queryClient.invalidateQueries(["board"]),
			queryClient.invalidateQueries(["menu"])
		]);
		closeDialogDeleteSingleBoard();
	};
	
	const optionsMutation = { onSuccess };
	const mutationFn = () => fetchDeleteOneBoardService(boardID);

	const { mutate: dialogDeleteSingleBoardSubmit, isLoading} = useMutation(mutationFn, optionsMutation);

	return (
		<DialogDeleteOneBoardView
			{...{
				isOpenDialogDeleteSingleBoard,
				closeDialogDeleteSingleBoard,
				dialogDeleteSingleBoardSubmit,
				isLoading
			}}
		/>
	);
};

export default memo(DialogDeleteSingleBoard);
