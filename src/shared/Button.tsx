import type { ReactNode } from "react";
import { cn } from "../utils/utils";

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps {
    variant: ButtonVariant
    children: ReactNode;
    onClick: () => void
    disabled?: boolean;
}

const buttonStyle: Record<ButtonVariant, string> = {
    primary: '',
    secondary: '',
}


const Button = ({variant, children, onClick, disabled}: ButtonProps) => {
    const buttonClass = buttonStyle[variant]

    return <button 
    className={cn('py-2 px-4 bg-neutral-800 text-white rounded-lg shrink-0 text-nowrap', 'active:scale-95 active:bg-neutral-700', 'disabled::bg-neutral-500',  buttonClass)}
     onClick={onClick}
     disabled={disabled}
     >
        {children}
    </button>


}

export default Button;