import React, { useContext, useState } from 'react'
import ColorContext from '../context/ColorContext'

const Hello = () => {


    let {theme,morning,twilight,night}=useContext(ColorContext);


    const [themeNumber,setThemeNumber]=useState(0);

    function switchTheme(){
        if(themeNumber===0){
            twilight();
            setThemeNumber(1);
        }
        else if(themeNumber===1){
            night();
            setThemeNumber(2);
        }
        else{
            morning();
            setThemeNumber(0);
        }
    }

  return (
    <div>
        <div style={{
            color:theme.color,
            background:theme.background,
            border:theme.border,
            align:theme.align
            }}>
                <h1> Ram is Dancing</h1>
                <p>Ram is a nice person</p>
        </div>
        
        {/* <button onClick={morning}>Turn to Morning</button>
        <button onClick={twilight}>Turn To Twilight</button>
        <button onClick={night}>Turn to Night</button> */}

        <button onClick={switchTheme}>{
            themeNumber==0?"Turn to Twilight":
            themeNumber==1?"Turn to Night":
            "Turn to Morning"
            }</button>
    </div>
  )
}

export default Hello