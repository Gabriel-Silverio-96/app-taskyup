import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useContextText } from "modules/texts/Text/Context";
import { useDialogText } from "modules/texts/Text/shared/hooks/useDialogText";
import DialogDeleteOneTextView from "./DialogDeleteOneTextView";
import { fetchDeleteOneTextService } from "./service";
import { TEXT_QUERY_KEY } from "shared/services/constants/texts";

const DialogDeleteOneText: React.FC = () => {
	const queryClient = useQueryClient();
	const { closeDialogDeleteOneText } = useDialogText();
	const { dialogDeleteOneText } = useContextText();
	const { textID } = dialogDeleteOneText;

	const optionMutation = {
		onError: () => closeDialogDeleteOneText(),
		onSuccess: () => {
			queryClient.invalidateQueries([TEXT_QUERY_KEY.FETCH_GET_ALL_TEXTS]);
			closeDialogDeleteOneText();
		},
	};

	const mutationFn = () => fetchDeleteOneTextService(textID);
	const { mutate: fetchDelete, isLoading: isDeleting } = useMutation(
		mutationFn,
		optionMutation
	);

	const onClose = !isDeleting ? closeDialogDeleteOneText : () => "";

	return (
		<DialogDeleteOneTextView
			{...{
				dialogDeleteOneText,
				closeDialogDeleteOneText,
				fetchDelete,
				isDeleting,
				onClose,
			}}
		/>
	);
};

export default memo(DialogDeleteOneText);
