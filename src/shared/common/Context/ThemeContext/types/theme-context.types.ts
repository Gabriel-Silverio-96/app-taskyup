import { FunctionReturnsVoid } from "shared/common/types";

export type ThemeName = "dark" | "light";

export interface IThemeContext {
	themeName: ThemeName;
	toggleTheme: FunctionReturnsVoid;
	theme: any;
}

export interface IThemeContextProvider {
	children?: React.ReactNode;
}
