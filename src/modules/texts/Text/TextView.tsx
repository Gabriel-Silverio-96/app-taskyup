import React from "react";

const TextView: React.FC<any> = (props) => {
	const {state} = props;
	return (
		<h1>{state}</h1>
	);
};

export default TextView;