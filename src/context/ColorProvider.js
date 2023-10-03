import React, { useState }  from "react";
import ColorContext from "./ColorContext";

let morning={
    color:"navy",
    background:"orange",
    border:"1px solid blue",
    align:"center"
}

const ColorProvider=({children})=>{

    const [theme,setTheme]=useState({morning});

    return (
        <ColorContext.Provider value={{
            theme:theme,
            morning:()=>setTheme({...morning}),
            twilight:()=>setTheme({
                ...theme,
                        color:"navy",
                        background:"yellow",
                        border:"1px solid blue",
                        align:"center"
            }),
            
            night:()=>setTheme({
                ...theme,
                        color:"white",
                        background:"black",
                        border:"1px solid red",
                        align:"right"
            })
            }}>
            {children}
        </ColorContext.Provider>
    )
}

export default ColorProvider;