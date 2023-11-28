import { useMediaQuery, useTheme } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import HeaderNoteView from "modules/notes/Note/components/HeaderNote/HeaderNoteView";
import { fetchPostCreateNoteService } from "modules/notes/Note/components/HeaderNote/services";
import { IFetchPostCreateNoteResponse } from "modules/notes/Note/components/HeaderNote/services/types";
import { NOTE_QUERY_KEY } from "modules/notes/Note/constants";
import { useDialogNote } from "modules/notes/Note/shared/hook/useDialogNote";
import { mountBodyNote } from "modules/notes/Note/utils/mount-body-note";
import React, { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchGetOneBoard from "shared/common/hook/useFetchGetOneBoard";
import { createURLQueryParams } from "shared/util/createURLQueryParams";
import { IHeaderNote } from "./types";

const HeaderNote: React.FC<IHeaderNote> = ({ count }) => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { board_id } = useParams();

	const { data, isFetching } = useFetchGetOneBoard(board_id);

	const { openDialogDeleteAllNotes } = useDialogNote();
	const { breakpoints } = useTheme();
	const isMediumScreen = useMediaQuery(breakpoints.down("md"));

	const onSuccess = async (response: IFetchPostCreateNoteResponse) => {
		const { note_id } = response.results;

		const linkToNoteEdit = createURLQueryParams("/note/edit", {
			note_id,
			board_id,
		});
		navigate(linkToNoteEdit);

		await queryClient.invalidateQueries([NOTE_QUERY_KEY.FETCH_GET_NOTES]);
	};

	const mutationFn = () =>
		fetchPostCreateNoteService({ board_id, body: mountBodyNote() });

	const { mutate: handleClickCreateNote, isLoading } = useMutation(
		mutationFn,
		{ onSuccess }
	);

	const isDisabledDeleteAllNotes = count === 0;

	return (
		<HeaderNoteView
			{...{
				data,
				openDialogDeleteAllNotes,
				isMediumScreen,
				isDisabledDeleteAllNotes,
				handleClickCreateNote,
				isLoading,
				isFetching,
			}}
		/>
	);
};

export default memo(HeaderNote);
