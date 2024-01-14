import React, { useRef } from 'react';
import CalendarMain from "./components/CalendarMain";
import Events from "./components/Events";
import ResrvForm_Modal from "./components/ResrvForm-Modal";
import "./App.css"
import "./fonts.css"

import Test_PassingRef from './components/test-passingRef';

function App() {
    const mouseLoc_ref = useRef({x: 0, y: 0}) // mouse location

    const handleMouseMove = (event) => {
        mouseLoc_ref.current = { x: event.clientX, y: event.clientY }
        //console.log('Mouse position:', mouseLoc_ref.current.x, mouseLoc_ref.current.y)
    }

    return (
        <div className="d-flex flex-row" onMouseMove={handleMouseMove} style={{width: "100vw", height: "100vh"}}>
            <div id="panel-calendar">
                <CalendarMain/>
                <ResrvForm_Modal mouseLoc={mouseLoc_ref}/>
            </div>
            <div className='flex-grow-1' id="panel-events">
                <Events mouseLoc={mouseLoc_ref}/>
            </div>
        </div>
    );
}

export default App;