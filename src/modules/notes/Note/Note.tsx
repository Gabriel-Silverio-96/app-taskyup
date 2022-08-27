import React from "react";
import { ContextProviderNote } from "./Context";
import NoteView from "./NoteView";

const Note: React.FC = () => {
	return (
		<ContextProviderNote>
			<NoteView />
		</ContextProviderNote>
	);
};

export default Note;
