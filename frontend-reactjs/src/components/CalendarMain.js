import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import "./CalendarMain.css"

const CalendarMain = () => {
    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
                initialView="dayGridMonth"
                height={"auto"}

                dateClick={(date) => {
                    console.log("Clicked date:", date.dateStr);
                }}
            />
        </div>
    );
}

export default CalendarMain