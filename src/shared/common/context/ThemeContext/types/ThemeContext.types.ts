export type ThemeName = "dark" | "light";

export interface IThemeContext {
    themeName: ThemeName;
    toggleTheme: () => void;
    theme: any;
}
  
export interface IThemeProvider {
    children?: React.ReactNode;
}