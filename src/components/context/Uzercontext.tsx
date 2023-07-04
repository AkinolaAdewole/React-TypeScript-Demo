import {createContext, useState } from 'react';
export type AuthUzer={
    name:string
    email:string
}


//create a componenet that provide user context value
type userContextProviderProps={
    children: React.ReactNode
}


// React.ReactNode is a type in React TypeScript that represents the possible types of children that a React component can have. 
// It can be used in various scenarios to specify the expected type of children or return values.



//Specify thr type for our context value
type userContextType={
    user:AuthUzer | null;
    setUser: React.Dispatch<React.SetStateAction <AuthUzer | null>>
}



// step 1 create a new context and use type assertion
export const userContext = createContext({} as userContextType)

//Define the provider component
export const UserContextProvider=({children}:userContextProviderProps)=>{
    
    const [user, setUser] = useState<AuthUzer| null>(null);
    return (
        <userContext.Provider value={{user, setUser}}>{children}</userContext.Provider>
    )
}