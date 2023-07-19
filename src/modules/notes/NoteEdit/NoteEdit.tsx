import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import NoteEditView from "./NoteEditView";
import schema from "./schema";

const NoteEdit: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<any>({
		resolver: yupResolver(schema),
		mode: "all",
	});

	const noteEditSubmit = (data: any) => {
		console.log(data);		
	};

	return <NoteEditView {...{ register, handleSubmit, noteEditSubmit, errors }} />;
};

export default NoteEdit;
