import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./CalendarMain.css"

const CalendarMain = (props) => {
    const [ selectedDate, setSelectedDate ] = useState(new Date())
    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
        props.onDateChange(selectedDate)
        console.log(selectedDate)
    };

    return (
        <div className="calendar-container">
            <Calendar
                className={"calendar-main"}
                calendarType='US'
                value={selectedDate}
                onChange={handleDateChange}
            />
        </div>

    );
}

export default CalendarMain