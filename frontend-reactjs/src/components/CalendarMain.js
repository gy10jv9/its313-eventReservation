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
                height="100vh"
            />
        </div>
    );
}

export default CalendarMain