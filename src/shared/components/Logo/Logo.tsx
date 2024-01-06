import { useThemeContext } from "shared/common/Context/ThemeContext";
import React, { memo } from "react";
import LogoView from "./LogoView";
import { ILogo } from "./types/Logo.component";
import { THEME_NAME } from "shared/constants";

const Logo: React.FC<ILogo> = ({ size = 143.146, isoType }) => {
	const { themeName, theme } = useThemeContext();
	const logoColor =
		themeName === THEME_NAME.DARK
			? theme.palette.common.white
			: theme.palette.common.black;

	return <LogoView {...{ logoColor, size, isoType }} />;
};

export default memo(Logo);
