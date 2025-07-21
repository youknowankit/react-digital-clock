import React, { useEffect, useState } from "react";

function ReactDigitalClock({ color }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  let style = {
    padding: "5px",
    margin: "35px",
    boxShadow: "0px 5px 15px cadetblue",
    borderRadius: "50px",
    backgroundColor: color,
  };

  return (
    <div style={style}>
      <h1>{time}</h1>
    </div>
  );
}

export default ReactDigitalClock;
