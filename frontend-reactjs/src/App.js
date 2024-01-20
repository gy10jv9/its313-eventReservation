import React, { useEffect, useRef, useState } from 'react';
import { DateToday_Context } from './components/DateToday-Context';
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

    // para sa calendar
    const dateToday = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    })
    const [ selectedDate, setSelectedDate ] = useState(dateToday)

    const eventsRef = useRef(null)
    const fetchData = () => {
        eventsRef.current.fetchData()
    }

    const test = () => {
        console.log(selectedDate)
    }

    return (
        <div className="d-flex flex-row" onMouseMove={handleMouseMove} style={{width: "100vw", height: "100vh"}}>
            <div id="panel-calendar">
                <CalendarMain onDateChange={setSelectedDate}/>
                <button onClick={test}>test-dateToday</button>
                <ResrvForm_Modal 
                    mouseLoc={mouseLoc_ref}
                    fetchData={fetchData}
                />
            </div>
            <div className='flex-grow-1' id="panel-events">
                <Events
                    ref={eventsRef}
                    mouseLoc={mouseLoc_ref} 
                    searchDate={selectedDate}
                />
            </div>
        </div>
    );
}

export default App;