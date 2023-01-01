import { useTheme } from "@mui/material";
import React, { memo } from "react";
import CardTextView from "./CardTextView";

const CardText: React.FC = () => {
	const { palette } = useTheme();

	return <CardTextView {...{ palette }} />;
};

export default memo(CardText);
