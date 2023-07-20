import React from "react";
import FormNoteEditView from "./FormNoteEditView";
import { useSearchParams } from "react-router-dom";

const FormNoteEdit: React.FC<any> = ({ register, handleSubmit, noteEditSubmit, errors }) => {
	const [ searchParams ] = useSearchParams();
	const board_id = searchParams.get("board_id");

	const linkPreviousPage = `/notes/${board_id}`;

	return <FormNoteEditView {...{ register, handleSubmit, noteEditSubmit, errors, linkPreviousPage }} />;
};

export default FormNoteEdit;