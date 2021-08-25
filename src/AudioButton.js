import {useState} from "react";
/**
 * AudioButton 	visualization for the pad's buttons
 * @param {prop.value: audio id in the soundGrid,
 * 
 *          prop.color: hex color of the button} prop 
 * @returns 
 */
export default function AudioButton(prop) {

    const [color, setColor] = useState(false);


    return (
        <div className="box">
        <button className="AudioButton"
            onClick={() => {
                prop.onClick(prop.value);
                setColor(!color)
            }}
            style={{
                
                background: color ?"radial-gradient( white,"+prop.color+")":prop.color,
                color:color?"black":"white",
                
            }}
        >   
            {prop.text}
            
        </button></div>
    )
}