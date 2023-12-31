import CalendarMain from "./components/CalendarMain";
import EventsPanel from "./components/EventsPanel";
import "./App.css"

function App() {
    return (
        <div className="d-flex flex-row">
            <div id="eventsPanel">
                <EventsPanel/>
            </div>
            <div className='flex-grow-1'>
                <CalendarMain/>
            </div>
        </div>
    );
}

export default App;
