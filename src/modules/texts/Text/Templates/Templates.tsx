import React, { memo } from "react";
import { useContextText } from "../Context";
import TemplatesView from "./TemplatesView";

const Templates: React.FC = () => {
	const { isOpenTemplates } = useContextText();
	
	return <TemplatesView {...{ isOpenTemplates }}/>;
};

export default memo(Templates);