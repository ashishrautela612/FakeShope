import React from 'react'
import { useState, useEffect } from 'react'

const useOffline = () => {
    const [isOffline, setIsOffline] = useState(false);

    useEffect(() => {
        window.addEventListener("online", () => {
            setIsOffline(false);
        })

        window.addEventListener("offline", () => {
            setIsOffline(true)
        })
    }, [isOffline])
    return isOffline;
}
export default useOffline
