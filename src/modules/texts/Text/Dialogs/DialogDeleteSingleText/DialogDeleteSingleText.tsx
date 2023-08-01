import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useContextText } from "../../Context";
import useDialogText from "../../hooks/useDialogText";
import DialogDeleteSingleTextView from "./DialogDeleteSingleTextView";
import { fetchDeleteOneTextService } from "./service";

const DialogDeleteSingleText: React.FC = () => {
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
		<DialogDeleteSingleTextView
			{...{
				dialogDeleteSingleText,
				closeDialogDeleteSingleText,
				fetchDelete,
				isDeleting
			}}
		/>
	);
};

export default memo(DialogDeleteSingleText);
