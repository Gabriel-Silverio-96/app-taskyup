import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { memo } from "react";
import { useParams } from "react-router-dom";
import { useContextText } from "modules/texts/Text/Context";
import useDialogText from "modules/texts/Text/hooks/useDialogText";
import DialogDeleteAllTextView from "./DialogDeleteAllTextsView";
import { fetchDeleteAllTextsService } from "./service";
import { TEXT_QUERY_KEY } from "shared/services/constants/texts";

const DialogDeleteAllTexts: React.FC = () => {
	const { board_id } = useParams();
	const queryClient = useQueryClient();

	const { closeDialogDeleteAllTexts } = useDialogText();
	const { dialogDeleteAllText } = useContextText();

	const optionMutation = {
		onError: () => closeDialogDeleteAllTexts(),
		onSuccess: () => {
			queryClient.invalidateQueries([TEXT_QUERY_KEY.FETCH_GET_ALL_TEXTS]);
			closeDialogDeleteAllTexts();
		},
	};

	const mutationFn = () => fetchDeleteAllTextsService(board_id);
	const { mutate: fetchDeleteAll, isLoading: isDeleting } = useMutation(
		mutationFn,
		optionMutation
	);

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
