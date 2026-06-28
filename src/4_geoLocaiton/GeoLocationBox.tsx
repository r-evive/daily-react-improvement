import type { GeoLocationError, GeoPosition } from "./helpers"
import { useGeoLocation } from "./useGeoLocation"

export const GeoLocationFailed = ({error}: {error?: GeoLocationError}) => {
    return <div className="flex flex-col">
        <span className="text-xl">Failed to receive location!</span>
        {error && <span>{error.message}</span>}
    </div>
}

export const GeoLocationLoading = () => {
    return <div className="flex flex-col">
        <span className="text-xl">Please wait, location is being retrieved!</span>
    </div>
}

export const GeoLocationDisplay = ({position}: {position: GeoPosition}) => {
    return <div className="flex flex-col">
        <span className="text-xl">Latitude: {position.latitude}</span>
        <span className="text-xl">Longitude: {position.longitude}</span>
    </div>
}

export const GeoLocationContainer = () => {
    const { position, error, pending} = useGeoLocation({ watch: true, options: { enableHighAccuracy: true, timeout: 5000, maximumAge: 0}})

    if(error) return <GeoLocationFailed error={error}/>
    if(pending) return <GeoLocationLoading />
    if(position) <GeoLocationDisplay position={position}/>
    return <GeoLocationFailed/>
}