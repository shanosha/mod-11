import { useEffect } from "react";
import { useState } from "react"

export function useFetch(url,options={}) {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        if (!url) return;
        
        const controller = new AbortController();
        setData(null);
        setLoading(true);
        setError(null);

        const fetchData = async () => {
            try {
                const response = await fetch(url, {...options, signal: controller.signal});
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result)
            }
            catch(err) {
                if (err.name !== 'AbortError') { // Don't set error if aborted
                    setError(err.message);
                }
            }
            finally {
                setLoading(false);
            }
        }

        const forcedDelay = setTimeout(()=>fetchData(),1500)

        return () => {
            controller.abort();
            clearTimeout(forcedDelay);
        }
    },[url])

    return {data,loading,error};
}