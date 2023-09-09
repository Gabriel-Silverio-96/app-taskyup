import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useContextText } from "modules/texts/Text/Context";
import { useDialogText } from "modules/texts/Text/shared/hooks/useDialogText";
import DialogDeleteOneTextView from "./DialogDeleteOneTextView";
import { fetchDeleteOneTextService } from "./service";
import { TEXT_QUERY_KEY } from "shared/services/constants/texts";

const DialogDeleteOneText: React.FC = () => {
	const queryClient = useQueryClient();
	const { closeDialogDeleteSingleText } = useDialogText();
	const { dialogDeleteSingleText } = useContextText();
	const { textID } = dialogDeleteSingleText;

	const optionMutation = {
		onError: () => closeDialogDeleteSingleText(),
		onSuccess: () => {
			queryClient.invalidateQueries([TEXT_QUERY_KEY.FETCH_GET_ALL_TEXTS]);
			closeDialogDeleteSingleText();
		},
	};

	const mutationFn = () => fetchDeleteOneTextService(textID);
	const { mutate: fetchDelete, isLoading: isDeleting } = useMutation(
		mutationFn,
		optionMutation
	);

	const onClose = !isDeleting ? closeDialogDeleteSingleText : () => "";

	return (
		<DialogDeleteOneTextView
			{...{
				dialogDeleteSingleText,
				closeDialogDeleteSingleText,
				fetchDelete,
				isDeleting,
				onClose,
			}}
		/>
	);
};

export default memo(DialogDeleteOneText);
