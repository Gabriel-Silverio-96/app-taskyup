import { useMediaQuery, useTheme } from "@mui/material";
import React, { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchGetOneBoard from "shared/common/hook/useFetchGetOneBoard";
import { useContextNote } from "modules/notes/Note/Context";
import { useDialogNote } from "modules/notes/Note/shared/hook/useDialogNote";
import HeaderNoteView from "./HeaderNoteView";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchPostCreateNoteService } from "./service/HeaderNote.service";
import { FORM_CREATE_NOTE } from "./constants";
import { IFetchPostCreateNoteResponse } from "./types";
import { createURLQueryParams } from "shared/util/createURLQueryParams";
import { NOTE_QUERY_KEY } from "modules/notes/Note/constants";

const HeaderNote: React.FC = () => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { board_id } = useParams();

	const { data } = useFetchGetOneBoard(board_id);
	const { countNotes } = useContextNote();

	const { openDialogDeleteAllNotes } = useDialogNote();
	const { breakpoints } = useTheme();
	const isMediumScreen = useMediaQuery(breakpoints.down("md"));

	const onSuccess = async (response: IFetchPostCreateNoteResponse) => {
		const { note_id } = response.results;

		const redirectTo = createURLQueryParams("/note/edit", {
			note_id,
			board_id,
		});
		navigate(redirectTo);

		await queryClient.invalidateQueries([NOTE_QUERY_KEY.FETCH_GET_NOTES]);
	};

	const optionsMutation = { onSuccess };
	const mutationFn = () =>
		fetchPostCreateNoteService({ board_id, payload: FORM_CREATE_NOTE });

	const { mutate: handleClickCreateNote, isLoading } = useMutation(
		mutationFn,
		optionsMutation
	);

	return (
		<HeaderNoteView
			{...{
				data,
				openDialogDeleteAllNotes,
				isMediumScreen,
				countNotes,
				handleClickCreateNote,
				isLoading,
			}}
		/>
	);
};

export default memo(HeaderNote);
