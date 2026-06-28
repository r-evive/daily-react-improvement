import { useEffect, useState } from "react"
import type { GeoLocationError, GeoPosition } from "./helpers";


interface useGeoLocationProps {
    options: PositionOptions
    watch?: boolean;
}

export const useGeoLocation = ({ options, watch} : useGeoLocationProps) => {
    const [pending, setPending] = useState<boolean>(true);
    const [error, setError] = useState<GeoLocationError | null>(null)
    const [position, setPosition] = useState<GeoPosition | null>(null)

    useEffect(() => {
        const onSuccess = (position: GeolocationPosition) => {
            setPosition({latitude: position.coords.latitude, longitude: position.coords.longitude})
            setPending(false);
            setError(null);
        }

        const onError = (error: GeoLocationError) => {
            setError(error)
            setPending(false)
            setPosition({latitude: null, longitude: null})
        }

        if (!("geolocation" in navigator))
            return onError({message: 'GEO API NOT AVAILABLE'});
        
        if(watch){
            const watchId = navigator.geolocation.watchPosition(onSuccess, onError, options)
            return () => navigator.geolocation.clearWatch(watchId)
        }
        else {
            navigator.geolocation.getCurrentPosition(onSuccess, onError, options)
        }
    }, [watch])

    return { position, error, pending }
}