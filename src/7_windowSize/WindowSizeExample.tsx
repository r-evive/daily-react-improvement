import { Exercise } from "../shared/Exercise";
import { useWindowSize } from "./useWindowSize";

export const WindowSizeExample = () => {
    const { width, height } = useWindowSize()

    return (<Exercise title="7. Window size" description="Implement a reusable useWindowSize hook that listens for browser resize events and provides up-to-date viewport dimensions for responsive React components.">
        <div className="flex flex-col justify-center items-center gap-4">
            <span className="p-2 text-white border">Window size: {width} x {height}</span>
        </div>
    </Exercise>)
}