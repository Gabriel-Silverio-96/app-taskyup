import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useContextText } from "../../Context";
import useDialogText from "../../hooks/useDialogText";
import DialogDeleteSingleTextView from "./DialogDeleteSingleTextView";
import { fetchDeleteSingleText } from "./service";

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

	const { mutate: fetchDelete, isLoading: isDeleting } = useMutation(
		() => fetchDeleteSingleText(textID), optionMutation		
	);

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

export default DialogDeleteSingleText;
