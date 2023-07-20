import React from "react";
import FormNoteEditView from "./FormNoteEditView";

const FormNoteEdit: React.FC<any> = ({ register, handleSubmit, noteEditSubmit, errors }) => {
	return <FormNoteEditView {...{ register, handleSubmit, noteEditSubmit, errors }} />;
};

export default FormNoteEdit;