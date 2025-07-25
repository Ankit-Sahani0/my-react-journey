import { createContext, useContext } from "react";


// We can pass variable and methods 
export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme: ()=>{},
    ligthTheme: ()=>{},

})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext);
}