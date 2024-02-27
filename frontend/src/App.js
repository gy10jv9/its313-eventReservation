import React, { useRef, useState } from 'react';
import { Context_Global } from './components/Context-Global';
import SideNav from './components/SideNav';
import CalendarMain from "./components/CalendarMain";
import Events from "./components/Events";
import ResrvForm_Modal from "./components/ResrvForm-Modal";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "./fonts.css"

function App() {
    // mouse coordinates
    const mouseCoordinates = useRef({x: 0, y: 0})
    /*const handleMouseMove = (event) => {
        mouseCoordinates.current = { x: event.clientX, y: event.clientY }
        //console.log('Mouse position:', mouseCoordinates.current.x, mouseCoordinates.current.y)
    }*/


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
        <div className='d-flex flex-row' style={{width: "100vw", height: "100vh", overflowX: "hidden"}}>
            <Context_Global.Provider value={{ searchFilter, setSearchFilter, mouseCoordinates }}>
                <SideNav/>
                <Events
                    ref={eventsRef}
                    mouseLoc={mouseCoordinates} 
                    searchDate={searchFilter.date}
                />
                <div id="panel-calendar" className='col-lg-3'>
                    <div className='container-calendar'>
                        <CalendarMain/>
                    </div>
                    <div className='flex-grow-1 w-100 bg-white' style={{marginTop: "16px"}}></div>
                    {/*<CalendarMain/>
                    <ResrvForm_Modal 
                        mouseLoc={mouseCoordinates}
                        fetchData={fetchData}
    />*/}
                </div>
            </Context_Global.Provider>
        </div>
    );
}

export default App;