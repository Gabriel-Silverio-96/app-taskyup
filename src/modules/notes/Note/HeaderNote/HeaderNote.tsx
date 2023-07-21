import { useMediaQuery, useTheme } from "@mui/material";
import React, { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchGetSingleBoard from "shared/common/hook/useFetchGetSingleBoard/useFetchGetSingleBoard";
import { useContextNote } from "../Context";
import useDialogNote from "../shared/hook/useDialogNote";
import HeaderNoteView from "./HeaderNoteView";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchPostCreateNoteService } from "./service/HeaderNote.service";
import { FORM_CREATE_NOTE } from "./constants";

const HeaderNote: React.FC = () => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { board_id } = useParams();

	const { data } = useFetchGetSingleBoard(board_id);
	const { countNotes } = useContextNote();

	const { openDialogNewNote, openDialogDeleteAllNotes } = useDialogNote();
	const { breakpoints } = useTheme();
	const isMediumScreen = useMediaQuery(breakpoints.down("md"));

	const onSuccess = async ({data}: any) => {
		const { note_id } = data.results;
		
		const redirectTo = `/note/edit?note_id=${note_id}&board_id=${board_id}`;
		navigate(redirectTo);	

		await queryClient.invalidateQueries(["notes"]);	
	};
	
	const optionsMutation = { onSuccess };
	const mutationFn = () => fetchPostCreateNoteService({ board_id, form: FORM_CREATE_NOTE });
	const { mutate } = useMutation(mutationFn, optionsMutation);

	const handleClickCreateNote = () => mutate();	

	return (
		<HeaderNoteView
			{...{
				data,
				openDialogNewNote,
				openDialogDeleteAllNotes,
				isMediumScreen,
				countNotes,
				handleClickCreateNote
			}}
		/>
	);
};

export default memo(HeaderNote);
