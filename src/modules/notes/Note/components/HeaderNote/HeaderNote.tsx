import { useMutation, useQueryClient } from "@tanstack/react-query";
import HeaderNoteView from "modules/notes/Note/components/HeaderNote/HeaderNoteView";
import { postCreateNoteService } from "modules/notes/Note/components/HeaderNote/services";
import type { IPostCreateNoteResponse } from "modules/notes/Note/components/HeaderNote/services/types";
import { useDialogNote } from "modules/notes/Note/shared/hooks/useDialogNote";
import { mountBodyNote } from "modules/notes/Note/utils/mount-body-note";
import React, { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NOTE_QUERY_KEY, MENU_QUERY_KEY, VIEW_MODE } from "shared/constants";
import { createURLQueryParams } from "shared/utils/create-url-query-params";
import type { IHeaderNote } from "modules/notes/Note/components/HeaderNote/types";
import { useNoteContext } from "modules/notes/Note/Context";

const HeaderNote: React.FC<IHeaderNote> = ({ count, title }) => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { board_id } = useParams();

	const { openDialogDeleteAllNotes } = useDialogNote();
	const { viewMode, setViewMode } = useNoteContext();

	const handleClickViewMode = () => {
		if (viewMode === VIEW_MODE.GRID) {
			setViewMode(VIEW_MODE.LIST);
			return;
		}

		setViewMode(VIEW_MODE.GRID);
	};

	const onSuccess = async ({ results }: IPostCreateNoteResponse) => {
		const { note_id } = results;

		const linkToNoteEdit = createURLQueryParams("/note/edit", {
			note_id,
			board_id,
		});
		navigate(linkToNoteEdit);

		await Promise.all([
			queryClient.invalidateQueries([NOTE_QUERY_KEY.FETCH_GET_NOTES]),
			queryClient.invalidateQueries([MENU_QUERY_KEY.FETCH_GET_MENU]),
		]);
	};

	const mutationFn = () =>
		postCreateNoteService({ board_id, body: mountBodyNote() });

	const { mutate, isLoading } = useMutation(mutationFn, { onSuccess });

	const isDisabledDeleteAllNotes = count === 0;

	return (
		<HeaderNoteView
			{...{
				title,
				handleClickViewMode,
				openDialogDeleteAllNotes,
				isDisabledDeleteAllNotes,
				mutate,
				isLoading,
			}}
		/>
	);
};

export default memo(HeaderNote);
