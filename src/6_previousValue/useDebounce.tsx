import { useEffect, useRef, useState } from "react"

export const useDebounce = <T,>(value: T, time = 300) => {
    const [debounced, setDebounced] = useState<T>();
    const debounceTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null)

    useEffect(() => {
        debounceTimeoutRef.current = setTimeout(() => {
            setDebounced(value);
        }, time)

        return () => {
            if(debounceTimeoutRef.current)
                clearTimeout(debounceTimeoutRef.current)
        }

    }, [value, time])

    return debounced
}