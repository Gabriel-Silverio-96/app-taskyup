import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useDialogBoard } from "modules/dashboard/Board/shared/hook/useDialogBoard";
import { useContextBoard } from "modules/dashboard/Board/Context";
import DialogDeleteOneBoardView from "modules/dashboard/Board/components/Dialogs/DialogDeleteOneBoard/DialogDeleteOneBoardView";
import { BOARD_QUERY_KEY } from "shared/services/constants/dashboard";
import { ASIDE_QUERY_KEY } from "shared/components/Drawer/components/Aside/constants";
import { fetchDeleteOneBoardService } from "modules/dashboard/Board/components/Dialogs/DialogDeleteOneBoard/services";

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

	const mutationFn = () => fetchDeleteOneBoardService(boardID);

	const { mutate, isLoading } = useMutation(mutationFn, { onSuccess });

	const onClose = !isLoading ? closeDialogDeleteOneBoard : () => "";

	return (
		<DialogDeleteOneBoardView
			{...{
				isOpenDialogDeleteOneBoard,
				closeDialogDeleteOneBoard,
				mutate,
				isLoading,
				onClose,
			}}
		/>
	);
};

export default memo(DialogDeleteOneBoard);
