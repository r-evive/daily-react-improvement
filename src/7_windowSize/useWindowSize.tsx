import { useEffect, useRef, useState } from "react"

interface Dimensions {
    width: number
    height: number
}

export const useWindowSize = (delay = 100) => {
    const [dimensions, setDimensions] = useState<Dimensions>({
        width: window.innerWidth,
        height: window.innerHeight
    })

    const resizeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)


    useEffect(() => {
        const handleResize = () => {
            if(resizeTimeoutRef.current)
                clearTimeout(resizeTimeoutRef.current)

            resizeTimeoutRef.current = setTimeout(() => {
                setDimensions({
                    width: window.innerWidth,
                    height: window.innerHeight
                })
            }, delay)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            if(resizeTimeoutRef.current)
                clearTimeout(resizeTimeoutRef.current)
            window.removeEventListener('resize', handleResize)
        }
    }, [delay])

    return dimensions
}