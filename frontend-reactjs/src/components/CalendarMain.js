import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./CalendarMain.css"

const CalendarMain = (props) => {
    /*const dateToday = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    })
    const [ selectedDate, setSelectedDate ] = useState(dateToday) // set and initail date sa date today*/

    const handleDateChange = (date) => {
        const stringDate = date.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        })

        /*setSelectedDate(stringDate)
        setSelectedDate(updatedDate => { // para ang rendered nga date halin sa babaw nga line ang ma register 
            //console.log(updatedDate)
            props.onDateChange(updatedDate)
        })*/

        props.onDateChange(stringDate)
    }

    return (
        <div className="calendar-container">
            <Calendar
                className={"calendar-main"}
                calendarType='gregory'
                onChange={handleDateChange}
            />
        </div>

    );
}

export default CalendarMain