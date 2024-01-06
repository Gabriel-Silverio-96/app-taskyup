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
import {
	IThemeProvider,
	IThemeContext,
	ThemeName,
} from "./types/ThemeContext.types";

export const THEME_KEY_LOCAL_STORAGE = "@taskyup.theme";

export const ThemeContext = createContext({} as IThemeContext);
export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
	const [themeName, setThemeName] = useState<ThemeName>(() => {
		const themeStorage = localStorage.getItem(
			THEME_KEY_LOCAL_STORAGE
		) as ThemeName;

		if (themeStorage) return themeStorage;

		return "dark";
	});

	const toggleTheme = useCallback(() => {
		setThemeName((prevState: ThemeName) =>
			prevState === "light" ? "dark" : "light"
		);
	}, []);

	const theme = useMemo(() => {
		if (themeName === "light") {
			localStorage.setItem(THEME_KEY_LOCAL_STORAGE, "light");
			return light;
		}
		localStorage.setItem(THEME_KEY_LOCAL_STORAGE, "dark");

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
