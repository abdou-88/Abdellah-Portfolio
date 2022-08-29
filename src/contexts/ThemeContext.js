import React, { createContext, useState } from 'react'

import { themeData } from '../data/themeData'

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    // eslint-disable-next-line
    const [theme, setTheme] = useState(themeData.theme)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [popUpOpen, setPopUpOpen] = useState(false);

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

     const setHandlePopUp = () => {
       setPopUpOpen(!popUpOpen);
     };


    const value = { theme, drawerOpen, setHandleDrawer, popUpOpen, setHandlePopUp };
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider