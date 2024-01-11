import CalendarMain from "./components/CalendarMain";
import Events from "./components/Events";
import ResrvForm_Modal from "./components/ResrvForm-Modal";
import SearchBox from "./components/SearchBox";
import "./App.css"
import "./fonts.css"

function App() {
    return (
        <div className="d-flex flex-row">
            <div id="panel-calendar">
                <CalendarMain/>
                <ResrvForm_Modal/>
            </div>
            <div className='flex-grow-1' id="panel-events">
                <Events/>
            </div>
        </div>
    );
}

export default App;