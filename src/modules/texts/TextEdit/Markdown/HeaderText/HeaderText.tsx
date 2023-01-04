import React, { memo } from "react";
import HeaderTextView from "./HeaderTextView";

const HeaderText: React.FC<any> = ({ saveText }) => {
	return <HeaderTextView {...{ saveText }} />;
};

export default memo(HeaderText);
