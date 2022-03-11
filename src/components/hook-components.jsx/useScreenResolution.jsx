import { useEffect, useState } from 'react';

export default function useScreenResolution() {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const isMobileView = width <= 480;
    return isMobileView;
}