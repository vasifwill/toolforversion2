import React,{useState} from "react"
import  FunctionContextComponent  from "./FunctionContextComponent"

export const ThemeContext = React.createContext() //<---

export default function ContextApi() {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme () {
   setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>  
    <button onClick={toggleTheme}>Toggle Theme</button>
      <FunctionContextComponent />
    </ThemeContext.Provider>
  )
}