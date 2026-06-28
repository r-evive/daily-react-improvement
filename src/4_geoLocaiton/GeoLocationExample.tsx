import { Exercise } from "../shared/Exercise";
import { GeoLocationContainer } from "./GeoLocationBox";

export const GeoLocationExample = () => {
    return (<Exercise title="4. Custom Geolocation Hook" description="Build a reusable geolocation hook that retrieves the user's current position, handles loading and error states, and exposes a clean API for React components.">
        <div className="flex flex-row w-full gap-4 items-center justify-center">
            <GeoLocationContainer />
        </div>
    </Exercise>)
}