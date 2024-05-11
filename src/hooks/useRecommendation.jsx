import axios from "axios";
import { useEffect, useState } from "react";

const useRecommendation = () => {
    const [items,setitems]=useState([])
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/recommendation`)
        .then(data => {
            setitems(data.data)
        })
    },[])
    
    
        return items
};

export default useRecommendation;