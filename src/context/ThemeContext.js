import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [darkTheme, setDarkTheme] = useState(false);
    const handleTheme = () => {
        console.log('Cambio de Theme');
        setDarkTheme(!darkTheme);
    }
    const data = {
        darkTheme,
        handleTheme
    }

    return(
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext};
export default ThemeProvider;