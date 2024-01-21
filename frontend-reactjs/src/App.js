import React, { useRef, useState } from 'react';
import { Context_Global } from './components/Context-Global';
import CalendarMain from "./components/CalendarMain";
import Events from "./components/Events";
import ResrvForm_Modal from "./components/ResrvForm-Modal";
import "./App.css"
import "./fonts.css"

function App() {
    const mouseLoc_ref = useRef({x: 0, y: 0}) // mouse location
    const handleMouseMove = (event) => {
        mouseLoc_ref.current = { x: event.clientX, y: event.clientY }
        //console.log('Mouse position:', mouseLoc_ref.current.x, mouseLoc_ref.current.y)
    }


    // global state gamit context para sa search filter
    const dateToday = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    const [ searchFilter, setSearchFilter ] = useState({
        "search query": "",
        status: "",
        location: "",
        date: dateToday,
    })


    const eventsRef = useRef(null)
    const fetchData = () => {
        eventsRef.current.fetchData()
    }

    return (
        <div className="d-flex flex-row" onMouseMove={handleMouseMove} style={{width: "100vw", height: "100vh"}}>
            <Context_Global.Provider value={{ searchFilter, setSearchFilter }}>
                <div id="panel-calendar">
                    <CalendarMain/>
                    <ResrvForm_Modal 
                        mouseLoc={mouseLoc_ref}
                        fetchData={fetchData}
                    />
                </div>

                <div className='flex-grow-1' id="panel-events">
                    <Events
                        ref={eventsRef}
                        mouseLoc={mouseLoc_ref} 
                        searchDate={searchFilter.date}
                    />
                </div>
            </Context_Global.Provider>
        </div>
    );
}

export default App;