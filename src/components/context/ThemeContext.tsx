import React, { createContext, useContext } from 'react';
import theme from './Theme'

type themeContextProviderProps={
    children:React.ReactNode
}
const ThemeContext = createContext(theme)

const themeContextProvider=({children}:themeContextProviderProps)=>{
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider> 
}