import React from "react";
import HeaderText from "./HeaderText";
import Markdown from "./Markdown";

const TextEditView: React.FC<any> = (props) => {
	const {state} = props;
	return (
		<>
			<HeaderText />
			<Markdown />
		</>
	);
};

export default TextEditView;