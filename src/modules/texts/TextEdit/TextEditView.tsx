import React from "react";
import Markdown from "modules/texts/TextEdit/components/Markdown";
import { TextEditContextProvider } from "modules/texts/TextEdit/Context";
import DialogShare from "modules/texts/TextEdit/components/DialogShare";

const TextEditView: React.FC = () => {
	return (
		<TextEditContextProvider>
			<Markdown />
			<DialogShare />
		</TextEditContextProvider>
	);
};

export default TextEditView;
