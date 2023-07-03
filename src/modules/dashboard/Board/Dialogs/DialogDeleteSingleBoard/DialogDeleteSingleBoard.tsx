import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import useDialogBoard from "../../shared/hook/useDialogBoard";
import { useContextBoard } from "../../Context";
import DialogDeleteSingleBoardView from "./DialogDeleteSingleBoardView";
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

	const { mutate: fetchDialogDeleteSingleBoard, isLoading} = useMutation(mutationFn, optionsMutation);

	return (
		<DialogDeleteSingleBoardView
			{...{
				isOpenDialogDeleteSingleBoard,
				closeDialogDeleteSingleBoard,
				fetchDialogDeleteSingleBoard,
				isLoading
			}}
		/>
	);
};

export default memo(DialogDeleteSingleBoard);
