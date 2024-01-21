import React, { useState, useEffect, useContext } from 'react';
import { Context_Global } from './Context-Global';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./CalendarMain.css"

const CalendarMain = (props) => {
    const { searchFilter, setSearchFilter } = useContext(Context_Global)

    const handleDateChange = (date) => {
        const stringDate = date.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        })
        setSearchFilter({
            ...searchFilter,
            date: stringDate
        })
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