import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { useContextText } from "../../Context";
import useDialogText from "../../hooks/useDialogText";
import DialogDeleteAllTextView from "./DialogDeleteAllTextsView";
import { fetchDeleteAllTexts } from "./service";

const DialogDeleteAllTexts: React.FC = () => {
	const { board_id } = useParams();
	const queryClient = useQueryClient();

	const { closeDialogDeleteAllTexts } = useDialogText();
	const { dialogDeleteAllText } = useContextText();

	const optionMutation = {
		onError: () => closeDialogDeleteAllTexts(),
		onSuccess: () => {
			queryClient.invalidateQueries(["texts"]);
			closeDialogDeleteAllTexts();
		},
	};

	const { mutate: fetchDeleteAll, isLoading: isDeleting } = useMutation(() => fetchDeleteAllTexts(board_id), optionMutation);

	return (
		<DialogDeleteAllTextView
			{...{
				dialogDeleteAllText,
				closeDialogDeleteAllTexts,
				fetchDeleteAll,
				isDeleting,
			}}
		/>
	);
};

export default memo(DialogDeleteAllTexts);
