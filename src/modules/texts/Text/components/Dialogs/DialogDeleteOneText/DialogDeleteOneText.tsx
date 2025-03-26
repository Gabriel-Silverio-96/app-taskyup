import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useTextContext } from "modules/texts/Text/Context";
import { useDialogText } from "modules/texts/Text/shared/hooks/useDialogText";
import DialogDeleteOneTextView from "modules/texts/Text/components/Dialogs/DialogDeleteOneText/DialogDeleteOneTextView";
import { deleteOneTextService } from "modules/texts/Text/components/Dialogs/DialogDeleteOneText/services";
import { TEXT_QUERY_KEY, MENU_QUERY_KEY } from "shared/constants";

const DialogDeleteOneText: React.FC = () => {
	const queryClient = useQueryClient();
	const { closeDialogDeleteOneText } = useDialogText();
	const { dialogDeleteOneText } = useTextContext();
	const { textID } = dialogDeleteOneText;

	const onSuccess = () => {
		queryClient.invalidateQueries([TEXT_QUERY_KEY.FETCH_GET_ALL_TEXTS]);
		queryClient.invalidateQueries([MENU_QUERY_KEY.FETCH_GET_MENU]);
		closeDialogDeleteOneText();
	};
	const onError = () => closeDialogDeleteOneText();

	const optionMutation = { onError, onSuccess };
	const mutationFn = () => deleteOneTextService(textID);
	const { mutate, isLoading } = useMutation(mutationFn, optionMutation);

	const onClose = !isLoading ? closeDialogDeleteOneText : () => "";

	return (
		<DialogDeleteOneTextView
			{...{
				dialogDeleteOneText,
				closeDialogDeleteOneText,
				mutate,
				isLoading,
				onClose,
			}}
		/>
	);
};

export default memo(DialogDeleteOneText);
