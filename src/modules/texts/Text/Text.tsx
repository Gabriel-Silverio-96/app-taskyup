import React, { useState } from "react";
import TextView from "./TextView";

const Text: React.FC = () => {
	const [state, setState] = useState<string>("Mynotes");

	return <TextView {... {state}} />;
};

export default Text;