import React from "react";
import Markdown from "./components/Markdown";
import { ContextProviderTextEdit } from "./Context";

const TextEditView: React.FC = () => {
	return (
		<ContextProviderTextEdit>
			<Markdown />
		</ContextProviderTextEdit>
	);
};

export default TextEditView;
