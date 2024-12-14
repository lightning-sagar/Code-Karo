"use client"
import { useEffect, useState } from "react";

    
function useMounted() {
    const [mounted,setmounted] = useState(false);


    useEffect(()=>{
            setmounted(true)
    },[])
    return mounted;
}

export default useMounted