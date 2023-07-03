import {createContext, useState } from 'react';
export type AuthUzer={
    name:string
    email:string
}


//create a componenet that provide user context value
type userContextProviderProps={
    children: React.ReactNode
}

// step 1 create a new context
export const userContext = createContext(null)

//Define the provider component
export const useContextProver=({chldren}:userContextProviderProps)=>{
    const [user, setUser] = useState<AuthUzer| null>(null);
    return (
        <userContext.Provider value={{user, setUser}}>{children}</userContext.Provider>
    )
}