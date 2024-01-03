import CalendarMain from "./components/CalendarMain";
import Events from "./components/Events";
import "./App.css"

function App() {
    return (
        <div className="d-flex flex-row">
            <div id="panel-calendar">
                <CalendarMain/>
            </div>
            <div className='flex-grow-1'>
                <Events/>
            </div>
        </div>
    );
}

export default App;