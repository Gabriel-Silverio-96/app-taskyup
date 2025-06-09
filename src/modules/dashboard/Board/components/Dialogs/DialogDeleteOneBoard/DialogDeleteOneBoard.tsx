import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useDialogBoard } from "modules/dashboard/Board/shared/hooks/useDialogBoard";
import { useBoardContext } from "modules/dashboard/Board/Context";
import DialogDeleteOneBoardView from "modules/dashboard/Board/components/Dialogs/DialogDeleteOneBoard/DialogDeleteOneBoardView";
import { BOARD_QUERY_KEY, MENU_QUERY_KEY } from "shared/constants";
import { deleteOneBoardService } from "modules/dashboard/Board/components/Dialogs/DialogDeleteOneBoard/services";
import { useLatestAccess } from "shared/common/hooks/useLatestAccess";

const DialogDeleteOneBoard: React.FC = () => {
	const queryClient = useQueryClient();
	const { deleteLatestAccess } = useLatestAccess();
	const { isOpenDialogDeleteOneBoard, boardID } = useBoardContext();
	const { closeDialogDeleteOneBoard } = useDialogBoard();

	const onSuccess = async () => {
		closeDialogDeleteOneBoard();
		deleteLatestAccess({ board_id: boardID });
		await Promise.all([
			queryClient.invalidateQueries([BOARD_QUERY_KEY.FETCH_GET_BOARDS]),
			queryClient.invalidateQueries([MENU_QUERY_KEY.FETCH_GET_MENU]),
		]);
	};

	const mutationFn = () => deleteOneBoardService(boardID);

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
