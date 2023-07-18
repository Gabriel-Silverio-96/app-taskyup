import React from "react";

const NoteEditView: React.FC<any> = props => {
	const { state } = props;
	return <h1>{state}</h1>;
};

export default NoteEditView;
