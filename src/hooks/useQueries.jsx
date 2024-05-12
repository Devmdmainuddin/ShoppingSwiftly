import axios from "axios";
import { useEffect, useState } from "react";

const useQueries = () => {
    const [items,setitems]=useState([])
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/querie`)
        .then(data => {
            setitems(data.data)
        })
    },[])
    
    
        return items
};

export default useQueries;