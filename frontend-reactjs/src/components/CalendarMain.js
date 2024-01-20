import React, { useState, useEffect, useContext } from 'react';
import { Context_Global } from './Context-Global';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./CalendarMain.css"

const CalendarMain = (props) => {
    const { setSelectedDate } = useContext(Context_Global)
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
        setSelectedDate(stringDate)
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