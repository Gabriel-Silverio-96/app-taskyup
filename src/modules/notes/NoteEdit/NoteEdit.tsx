import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import NoteEditView from "./NoteEditView";
import schema from "./schema";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchGetOneNote, fetchPutNote } from "./service";
import { useSearchParams } from "react-router-dom";

const NoteEdit: React.FC = () => {
	const queryClient = useQueryClient();

	const [searchParams] = useSearchParams();
	const note_id = searchParams.get("note_id");
	const board_id = searchParams.get("board_id");

	const { register, handleSubmit, formState: { errors }, setValue	} = useForm<any>({
		resolver: yupResolver(schema),
		mode: "all",
	});

	const onSuccessQuery = (data: any) => {
		setValue("color_note", data.color_note);
		setValue("title_note", data.title_note);
		setValue("observation", data.observation);
	};

	const queryKey = ["get_one_note"];
	const queryFn = () => fetchGetOneNote(note_id);
	const optionsQuery = { onSuccess: onSuccessQuery };

	const { isFetching } = useQuery<any>(queryKey, queryFn, optionsQuery);

	const onSuccessMutation = async () => await queryClient.invalidateQueries(["notes"]);	
	const mutationFn = (form: any) => fetchPutNote({ payload: form, note_id, board_id });
	const optionsMutation = { onSuccess: onSuccessMutation };

	const { mutate: noteEditSubmit } = useMutation(mutationFn, optionsMutation);

	return <NoteEditView {...{ register, handleSubmit, noteEditSubmit, errors, isFetching }} />;
};

export default NoteEdit;
