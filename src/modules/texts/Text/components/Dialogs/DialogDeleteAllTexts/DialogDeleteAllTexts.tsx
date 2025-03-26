import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { useTextContext } from "modules/texts/Text/Context";
import { useDialogText } from "modules/texts/Text/shared/hooks/useDialogText";
import DialogDeleteAllTextView from "modules/texts/Text/components/Dialogs/DialogDeleteAllTexts/DialogDeleteAllTextsView";
import { deleteAllTextsService } from "modules/texts/Text/components/Dialogs/DialogDeleteAllTexts/services";
import { TEXT_QUERY_KEY, MENU_QUERY_KEY } from "shared/constants";

const DialogDeleteAllTexts: React.FC = () => {
	const { board_id } = useParams();
	const queryClient = useQueryClient();

	const { closeDialogDeleteAllTexts } = useDialogText();
	const { dialogDeleteAllText } = useTextContext();

	const onError = () => closeDialogDeleteAllTexts();
	const onSuccess = () => {
		queryClient.invalidateQueries([TEXT_QUERY_KEY.FETCH_GET_ALL_TEXTS]);
		queryClient.invalidateQueries([MENU_QUERY_KEY.FETCH_GET_MENU]);
		closeDialogDeleteAllTexts();
	};

	const optionsMutation = { onError, onSuccess };

	const mutationFn = () => deleteAllTextsService(board_id);
	const { mutate, isLoading } = useMutation(mutationFn, optionsMutation);

	const onClose = !isLoading ? closeDialogDeleteAllTexts : () => "";

	return (
		<DialogDeleteAllTextView
			{...{
				dialogDeleteAllText,
				closeDialogDeleteAllTexts,
				mutate,
				isLoading,
				onClose,
			}}
		/>
	);
};

export default memo(DialogDeleteAllTexts);
