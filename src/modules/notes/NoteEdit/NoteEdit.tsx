import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import NoteEditView from "./NoteEditView";
import schema from "./schema";
import { useQuery } from "@tanstack/react-query";
import { fetchGetOneNote } from "./service";

const NoteEdit: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue
	} = useForm<any>({
		resolver: yupResolver(schema),
		mode: "all",
	});

	const onSuccessQuery = (data: any) => {
		setValue("color_note", data.color_note);
		setValue("title_note", data.title_note);
		setValue("observation", data.observation);
	};

	const queryKey = ["get_one_note"];
	const queryFn = () => fetchGetOneNote("26cd0622-2c4b-4116-93da-370eef00a2b0");
	const optionsQuery = { onSuccess: onSuccessQuery };

	const { isFetching } = useQuery<any>(queryKey, queryFn, optionsQuery);

	const noteEditSubmit = (data: any) => {
		console.log(data);		
	};

	return <NoteEditView {...{ register, handleSubmit, noteEditSubmit, errors, isFetching }} />;
};

export default NoteEdit;
