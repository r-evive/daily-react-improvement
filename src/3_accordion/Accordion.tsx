import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import { cn } from "../utils/utils";

interface AccordionContextValue {
    value: string
    setValue: Dispatch<SetStateAction<string>>
}

interface AccordionProps {
    defaultValue: string
    children: ReactNode
}

export const AccordionContext = createContext<AccordionContextValue | null>(null)

export const Accordion = ({ defaultValue, children}: AccordionProps) => {
    const [value, setValue] = useState<string>(defaultValue)

    return <AccordionContext.Provider value={{value, setValue}}>
        <div className="w-full flex flex-col border rounded-lg">
            {children}
        </div>
    </AccordionContext.Provider>
}

const useAccordion = () => {
    const context = useContext(AccordionContext)

    if(!context) throw new Error('Invalid context')

    return context
}

interface ItemProps {
    tab: string
    header: string
    children: ReactNode
}

const Item = ({tab, header, children}: ItemProps) => {
    const { value, setValue } = useAccordion();

    const isOpened = tab === value

    const handleClick = () => {
        setValue(tab);
    }

    return <div 
        className={cn('w-full flex-col text-left px-4 border-b last:border-b-0 py-2 select-none', isOpened ? 'bg-neutral-800/40' : '')}
        onClick={handleClick}>
            <div className="py-2 text-lg flex gap-2 flex-nowrap items-center">
                {!isOpened ? <ChevronDownIcon/> : <ChevronUpIcon/>} 
                {header}
            </div>
            {isOpened && <div className="italic mx-4 my-2">
                {children}
            </div>}
        </div>
}


Accordion.Item = Item;