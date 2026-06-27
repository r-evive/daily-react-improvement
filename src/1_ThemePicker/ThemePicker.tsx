import { useContext } from "react";
import Button from "../shared/Button";
import { Exercise } from "../shared/Exercise";
import { cn } from "../utils/utils";
import useTheme, { Theme } from "./useDarkMode"
import { AccordionContext } from "../3_accordion/Accordion";


interface ThemeBlockProps {
    theme: Theme
}

const ThemeBlock = ({theme}: ThemeBlockProps) => {
    return <div className={cn('w-full h-10 flex items-center justify-center rounded-lg', theme === Theme.DARK ? 'bg-gray-600 text-white' : 'bg-stone-300 text-black')}>
        {theme === Theme.DARK ? 'DARK MODE' : 'WHITE MODE'}
    </div>
}

export const ThemePicker = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Exercise title="1. Theme picker" description="Simple hook to change app theme. On change theme is saved in local storage. Defined as hook design pattern.">
            <div className="flex flex-row w-full gap-4">
                <div className="flex-0">
                    <Button variant="primary" onClick={toggleTheme}>Toggle theme</Button>
                </div>
                <div className="flex-1 justify-start items-start">
                    <ThemeBlock theme={theme}/>
                </div>
            </div>
        </Exercise>
    )
}