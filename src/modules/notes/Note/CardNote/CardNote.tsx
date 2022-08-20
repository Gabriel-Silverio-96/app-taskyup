import { useTheme } from "@mui/material";
import React, { memo } from "react";
import CardNoteView from "./CardNoteView";

const CardNote: React.FC = () => {
	const { palette } = useTheme();
	return <CardNoteView {...{ palette }} />;
};

export default memo(CardNote);
