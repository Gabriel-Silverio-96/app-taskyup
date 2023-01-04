import React, { memo } from "react";
import HeaderTextView from "./HeaderTextView";
import { IHeaderText } from "./types/HeaderText.component";

const HeaderText: React.FC<IHeaderText> = ({ saveText, titleText, onChangeTextTitle }) => {	
	return <HeaderTextView {...{ saveText, titleText, onChangeTextTitle }} />;
};

export default memo(HeaderText);
