import { useState, useEffect } from 'react'

function useFetch(param) {
    const [data, setDatas] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/v1/characters/${param.id}`);
                const data = await response.json();
                setDatas(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchData();
    } , [])

    return { data, loading }
}

export default useFetch