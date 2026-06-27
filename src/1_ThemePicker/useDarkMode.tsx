import { useEffect, useState } from "react";

export const Theme = {
    DARK: 'dark',
    LIGHT: 'light'
} as const;

export type Theme = (typeof Theme)[keyof typeof Theme];

const LOCAL_STORAGE_THEME_KEY = 'appTheme'

const useTheme = () => {
    const [theme, setTheme] = useState<Theme>(() => {
        const appTheme = window.localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
        const theme = Object.values(Theme).find(theme => theme === appTheme)

        return theme || Theme.DARK;
    })

    const toggleTheme = () => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)

    useEffect(() => {
        window.localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
    }, [theme])

    return {theme, setTheme, toggleTheme}
}

export default useTheme;