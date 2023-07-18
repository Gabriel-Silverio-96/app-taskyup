import React, { useState } from "react";
import NoteEditView from "./NoteEditView";

const NoteEdit: React.FC = () => {
	const [state, setState] = useState<string>("Mynotes");

	return <NoteEditView {...{ state }} />;
};

export default NoteEdit;
