import React from "react";
import Markdown from "modules/texts/TextEdit/components/Markdown";
import { ContextProviderTextEdit } from "modules/texts/TextEdit/Context";
import DialogShare from "modules/texts/TextEdit/components/DialogShare";

const TextEditView: React.FC = () => {
	return (
		<ContextProviderTextEdit>
			<Markdown />
			<DialogShare />
		</ContextProviderTextEdit>
	);
};

export default TextEditView;
