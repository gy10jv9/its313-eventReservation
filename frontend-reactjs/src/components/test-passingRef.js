import React from "react";

const Test_PassingRef = (props) => {
    const { mouseLoc } = props;
    
    const handleMouseMove = (event) => {
        console.log(`test ${mouseLoc.current.x}`)
    }

    return (
        <div onMouseMove={handleMouseMove} style={{width: "100px", height: "100px", border: "1px solid black"}}></div>
    )
}

export default Test_PassingRef