import React, {useContext} from 'react'
import {ThemeContext} from "./App"

export const FunctionContextComponent = () => {
  const darkTheme = useContext(ThemeContext)

  const themeStyles = {
    backgroundColor: darkTheme? '#333' : '#ccc',
    color: darkTheme ? "#CCC" : "#333",
    padding:'2rem',
    margin:"2rem"
  }
  return (
    <div style={themeStyles}>Function Theme</div>
  )
}

