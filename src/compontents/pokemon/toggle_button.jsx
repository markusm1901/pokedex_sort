import { useState } from "react";
export const Button = (prop)=>{
    const[state,toggled] =useState(false);
    const clicked = () => {
        const new_value = !state;
        toggled(new_value);
        if (prop.type) {
            prop.props(prop.type);
        } else {
            prop.props({ mm1: prop.text.on, mm2: new_value });
        }
    }
    return (<div>
        <button type="button" className="btn" onClick={clicked}>{ state ? prop.text.on : prop.text.off}</button>
    </div>)
} 
