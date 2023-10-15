import React from "react";
import Markdown from "./components/Markdown";
import { ContextProviderTextEdit } from "./Context";
import DialogShare from "./components/DialogShare";

const TextEditView: React.FC = () => {
	return (
		<ContextProviderTextEdit>
			<Markdown />
			<DialogShare />
		</ContextProviderTextEdit>
	);
};

export default TextEditView;
