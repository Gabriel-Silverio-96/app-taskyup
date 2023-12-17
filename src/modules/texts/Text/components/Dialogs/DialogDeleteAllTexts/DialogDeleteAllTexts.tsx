import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { useContextText } from "modules/texts/Text/Context";
import { useDialogText } from "modules/texts/Text/shared/hooks/useDialogText";
import DialogDeleteAllTextView from "modules/texts/Text/components/Dialogs/DialogDeleteAllTexts/DialogDeleteAllTextsView";
import { fetchDeleteAllTextsService } from "modules/texts/Text/components/Dialogs/DialogDeleteAllTexts/services";
import { TEXT_QUERY_KEY } from "shared/constants";

const DialogDeleteAllTexts: React.FC = () => {
	const { board_id } = useParams();
	const queryClient = useQueryClient();

	const { closeDialogDeleteAllTexts } = useDialogText();
	const { dialogDeleteAllText } = useContextText();

	const onError = () => closeDialogDeleteAllTexts();
	const onSuccess = () => {
		queryClient.invalidateQueries([TEXT_QUERY_KEY.FETCH_GET_ALL_TEXTS]);
		closeDialogDeleteAllTexts();
	};

	const optionsMutation = { onError, onSuccess };

	const mutationFn = () => fetchDeleteAllTextsService(board_id);
	const { mutate: fetchDeleteAll, isLoading } = useMutation(
		mutationFn,
		optionsMutation
	);

	const onClose = !isLoading ? closeDialogDeleteAllTexts : () => "";

	return (
		<DialogDeleteAllTextView
			{...{
				dialogDeleteAllText,
				closeDialogDeleteAllTexts,
				fetchDeleteAll,
				isLoading,
				onClose,
			}}
		/>
	);
};

export default memo(DialogDeleteAllTexts);
