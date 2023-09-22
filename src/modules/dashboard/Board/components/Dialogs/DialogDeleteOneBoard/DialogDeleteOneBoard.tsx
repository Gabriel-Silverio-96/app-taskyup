import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useDialogBoard } from "modules/dashboard/Board/shared/hook/useDialogBoard";
import { useContextBoard } from "modules/dashboard/Board/Context";
import DialogDeleteOneBoardView from "./DialogDeleteOneBoardView";
import { fetchDeleteOneBoardService } from "./service";
import { BOARD_QUERY_KEY } from "shared/services/constants/dashboard";
import { ASIDE_QUERY_KEY } from "shared/components/Drawer/components/Aside/constants";

const DialogDeleteOneBoard: React.FC = () => {
	const queryClient = useQueryClient();
	const { isOpenDialogDeleteOneBoard, boardID } = useContextBoard();
	const { closeDialogDeleteOneBoard } = useDialogBoard();

	const onSuccess = async () => {
		closeDialogDeleteOneBoard();
		await Promise.all([
			queryClient.invalidateQueries([BOARD_QUERY_KEY.FETCH_GET_BOARDS]),
			queryClient.invalidateQueries([ASIDE_QUERY_KEY.FETCH_GET_MENU]),
		]);
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
				isOpenDialogDeleteOneBoard,
				closeDialogDeleteOneBoard,
				dialogDeleteOneBoardSubmit,
				isLoading,
			}}
		/>
	);
};

export default memo(DialogDeleteOneBoard);
