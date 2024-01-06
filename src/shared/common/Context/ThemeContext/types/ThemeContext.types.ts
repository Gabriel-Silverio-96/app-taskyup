import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export type ThemeName = "dark" | "light";

export interface IThemeContext {
	themeName: ThemeName;
	toggleTheme: FunctionReturnsVoid;
	theme: any;
}

export interface IThemeProvider {
	children?: React.ReactNode;
}
