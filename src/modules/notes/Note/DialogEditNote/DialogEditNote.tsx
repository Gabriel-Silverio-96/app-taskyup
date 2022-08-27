import { yupResolver } from "@hookform/resolvers/yup";
import { useMediaQuery, useTheme } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { memo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import api from "shared/services/api";
import dateFormat from "shared/util/dateFormat";
import { useContextNote } from "../Context";
import useDialogNote from "../shared/hook/useDialogNote";
import { IDialogNoteForm } from "../shared/types";
import DialogEditNoteView from "./DialogEditNoteView";
import schema from "./schema";
import { IFetchSingleNote } from "./types/DialogEditNote.component";

const DialogEditNote: React.FC = () => {
	const theme = useTheme();
	const queryClient = useQueryClient();
	const { board_id: boardID } = useParams();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const { isOpenDialogEditNote, noteID } = useContextNote();
	const { closeDialogEditNote } = useDialogNote();

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
		clearErrors,
	} = useForm<IDialogNoteForm>({
		resolver: yupResolver(schema),
		mode: "all",
	});

	const fetchSingleNote = async () => {
		const { data } = await api.get(`notes/note_id=${noteID}`);
		return data;
	};

	const onSuccessFetchSingleNote = (data: IFetchSingleNote) => {
		setValue("color_note", data.color_note);
		setValue("title_note", data.title_note);
		setValue("observation", data.observation);
		setValue("note_created_at", dateFormat(data.created_at));
	};

	const { refetch, isFetching: isLoading } = useQuery<IFetchSingleNote>(
		["dialog_edit_note"],
		fetchSingleNote,
		{ cacheTime: 0, onSuccess: onSuccessFetchSingleNote, retry: false, enabled: false }
	);

	useEffect(() => {
		!!Object.keys(errors).length && clearErrors();
		isOpenDialogEditNote && refetch();
	}, [isOpenDialogEditNote]);

	const mutationDialogEditNote = async (dataEditNote: IDialogNoteForm) => {
		await api.put("/notes/edit", dataEditNote, {
			params: { note_id: noteID, board_id: boardID },
		});
		closeDialogEditNote();
	};

	const { mutate: fetchDialogEditNote, isLoading: isSaving } = useMutation(mutationDialogEditNote, {
		onSuccess: () => queryClient.invalidateQueries(["notes"])
	});

	return (
		<DialogEditNoteView
			{...{
				fullScreen,
				closeDialogEditNote,
				isOpenDialogEditNote,
				register,
				handleSubmit,
				fetchDialogEditNote,
				isLoading,
				isSaving,
				errors,
			}}
		/>
	);
};

export default memo(DialogEditNote);
