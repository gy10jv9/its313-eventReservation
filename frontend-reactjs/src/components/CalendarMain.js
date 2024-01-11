import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./CalendarMain.css"

const CalendarMain = () => {
    return (
        <div className="calendar-container">
            <Calendar
                className={"calendar-main"}
                calendarType='US'
            />
        </div>

    );
}

export default CalendarMain