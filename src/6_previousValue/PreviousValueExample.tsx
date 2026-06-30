import { useState, type ChangeEvent } from "react"
import { Exercise } from "../shared/Exercise"
import { useDebounce } from "./useDebounce";
import { usePrevious } from "./usePrevious";

export const PreviousValueExample = () => {
    const [value, setValue] = useState<string>("");

    const deboucedValue = useDebounce(value);
    const previousValue = usePrevious(deboucedValue)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    return (<Exercise title="6. Previous Value Hook" description="Build a reusable usePrevious hook to track the previous value across renders. Use it together with a debounced input to clearly visualize how values change over time.">
        <div className="flex flex-col justify-center items-center gap-4">
            <input type="text" onChange={handleChange} className="border rounded p-2" placeholder="Enter text"></input>
            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-2 p-4 bg-gray-800 border rounded">
                    <span className="border-b">Current value:</span>
                    <span className="text-white font-medium italic py-2">{deboucedValue}</span>
                </div>
                <div className="flex flex-col gap-2 p-4 bg-gray-800 border rounded">
                    <span className="border-b">Previous value:</span>
                    <span className="text-white font-medium italic py-2">{previousValue}</span>
                </div>
            </div>
        </div>
    </Exercise>)
}