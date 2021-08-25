import {useState} from "react";

export default function AudioButton(prop) {

    const [color, setColor] = useState(false);


    return (

        <button
            onClick={() => {
                prop.onClick(prop.value);
                setColor(!color)
            }}
            style={{
                border: "none",
                background: color ?"radial-gradient( white,"+prop.color+")":prop.color,
                boxShadow: "0 0 4px 2px rgba(0,0,0,.2)",
                overflow:"hidden",
                cursor: "pointer",
                color:color?"black":"white",
                height: "10vh",
                outline: "none",
                borderRadius: "15%",
                width: "10vh"
            }}
        >
            {prop.text}
            {/* <PlayPause buttonToShow={showPlayButton ? "play" : "pause"} /> */}
        </button>
    )
}