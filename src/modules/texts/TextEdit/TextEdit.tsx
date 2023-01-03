import React, { useState } from "react";
import TextEditView from "./TextEditView";

const TextEdit: React.FC = () => {
	const [state, setState] = useState<string>("Mynotes");

	return <TextEditView {... {state}} />;
};

export default TextEdit;