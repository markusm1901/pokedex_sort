import { useState } from "react";

export const Row = (props) => {

    
    const lp = props.index;
    const name = props.name;
    const surname = props.surname;
    
    const [text, setText]= useState("text1");

    const Handler = () =>{
        console.log('Clicked !');
        // console.log("text:", text);
        setText("tekst2");
    };

    return(
        <tr>
            <td>{text}</td>
            <td>{lp}</td>
            <td>{name}</td>
            <td>{surname}</td>
            <td><input type="button" onClick={Handler} value="Remove"/></td>
            {/* <td><input type="button" value= "Remove" onClick={Remove(lp)} /></td> */}
        </tr>
    );
};