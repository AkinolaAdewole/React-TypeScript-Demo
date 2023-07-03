import React, { createContext, useContext } from 'react';
import theme from './Theme'

type themeContextProviderProps={
    children:React.ReactNode
}
export const ThemeContext = createContext(theme)


const ThemeContextProvider=({children}:themeContextProviderProps)=>{
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider> 
}

export default ThemeContextProvider;