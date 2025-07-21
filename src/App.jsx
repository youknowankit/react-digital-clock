import { useState } from "react";
import "./css/App.css";
import ReactDigitalClock from "./Components/DigitalClock";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="app-container">
      <div className="aside">
        <aside>
          <h1>Clock with Props</h1>
          <h2>Select the Colour of Stopwatch:</h2>
          <select
            name="color"
            id="color"
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="white">White</option>
            <option value="cadetblue">Cadetblue</option>
            <option value="aqua">Aqua</option>
            <option value="orange">Orange</option>
          </select>
        </aside>
      </div>
      <div className="clock">
        <ReactDigitalClock color={color} />
      </div>
    </div>
  );
}

export default App;
