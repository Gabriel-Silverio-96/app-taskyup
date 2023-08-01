import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useContextText } from "modules/texts/Text/Context";
import useDialogText from "modules/texts/Text/hooks/useDialogText";
import DialogDeleteOneTextView from "./DialogDeleteOneTextView";
import { fetchDeleteOneTextService } from "./service";

const DialogDeleteOneText: React.FC = () => {
	const queryClient = useQueryClient();
	const { closeDialogDeleteSingleText } = useDialogText();
	const { dialogDeleteSingleText } = useContextText();
	const { textID } = dialogDeleteSingleText;

	const optionMutation = {
		onError: () => closeDialogDeleteSingleText(),
		onSuccess: () => {
			queryClient.invalidateQueries(["texts"]);
			closeDialogDeleteSingleText();
		}
	};

	const mutationFn = () => fetchDeleteOneTextService(textID);
	const { mutate: fetchDelete, isLoading: isDeleting } = useMutation(mutationFn, optionMutation);

	return (
		<DialogDeleteOneTextView
			{...{
				dialogDeleteSingleText,
				closeDialogDeleteSingleText,
				fetchDelete,
				isDeleting
			}}
		/>
	);
};

export default memo(DialogDeleteOneText);
