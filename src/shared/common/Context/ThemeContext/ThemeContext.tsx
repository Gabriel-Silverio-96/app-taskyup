import { ThemeProvider as ThemeProviderMUI } from "@mui/material";
import { Box } from "@mui/system";
import { dark, light } from "assets/theme";
import React, {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";
import type {
	IThemeContextProvider,
	IThemeContext,
	ThemeName,
} from "shared/common/Context/ThemeContext/types";
import { THEME_NAME } from "shared/constants";

export const THEME_KEY_LOCAL_STORAGE = "@taskyup.theme";

export const ThemeContext = createContext({} as IThemeContext);
export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider: React.FC<IThemeContextProvider> = ({
	children,
}) => {
	const [themeName, setThemeName] = useState<ThemeName>(() => {
		const themeStorage = localStorage.getItem(
			THEME_KEY_LOCAL_STORAGE
		) as ThemeName;

		if (themeStorage) return themeStorage;

		return THEME_NAME.DARK;
	});

	const toggleTheme = useCallback(() => {
		setThemeName((prevState: ThemeName) =>
			prevState === THEME_NAME.LIGHT ? THEME_NAME.DARK : THEME_NAME.LIGHT
		);
	}, []);

	const theme = useMemo(() => {
		if (themeName === THEME_NAME.LIGHT) {
			localStorage.setItem(THEME_KEY_LOCAL_STORAGE, THEME_NAME.LIGHT);
			return light;
		}

		localStorage.setItem(THEME_KEY_LOCAL_STORAGE, THEME_NAME.DARK);

		return dark;
	}, [themeName]);

	return (
		<ThemeContext.Provider value={{ themeName, toggleTheme, theme }}>
			<ThemeProviderMUI theme={theme}>
				<Box
					width="100%"
					height="100vh"
					bgcolor={theme.palette.background.default}>
					{children}
				</Box>
			</ThemeProviderMUI>
		</ThemeContext.Provider>
	);
};
