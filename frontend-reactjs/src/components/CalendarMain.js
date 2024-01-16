import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./CalendarMain.css"

const CalendarMain = (props) => {
    const [ selectedDate, setSelectedDate ] = useState({
        month: "",
        date: "",
        year: ""
    })
    const handleDateChange = (newDate) => {
        setSelectedDate({
            ...selectedDate,
            month: newDate.getMonth()
        });
        props.onDateChange(selectedDate)
    }

    const handleTest = () => {
        console.log(selectedDate)
    }

    return (
        <div className="calendar-container">
            <Calendar
                className={"calendar-main"}
                calendarType='US'
                onChange={handleDateChange}
            />
            <button onClick={handleTest}>test</button>
        </div>

    );
}

export default CalendarMain