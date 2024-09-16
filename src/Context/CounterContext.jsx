import React, { createContext, useState } from "react";

export const ContextCounter = createContext()

export const ContextCounterProvider = ({children})=>{
    const [counter,setCounter] = useState(0)

    return (
        <ContextCounter.Provider value={{counter,setCounter}}>
            {children}
        </ContextCounter.Provider>
    )

}