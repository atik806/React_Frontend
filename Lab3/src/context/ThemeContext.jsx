import { Children } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

function ThemeProvider({Children}){
    const theme,setTheme = useState("light");
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className= {theme}>
                {Children}
            </div>
        </ThemeContext.Provider>
            
    )

}