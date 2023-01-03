import { useMediaQuery, useTheme } from "@mui/material";
import React, { memo, useState } from "react";
import HeaderTextView from "./HeaderTextView";

const HeaderText: React.FC = () => {
	return <HeaderTextView />;
};

export default memo(HeaderText);
