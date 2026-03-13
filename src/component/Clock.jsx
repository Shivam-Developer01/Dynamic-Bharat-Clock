import { useEffect, useState } from "react";
import "./Clock.css";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="page">
      <div className="clock-card">
        <h1 className="title">Bharat Clock</h1>

        <p className="subtitle">
          This clock shows the current time in real time.
        </p>

        <div className="time-box">
          <p className="date">{time.toLocaleDateString()}</p>
          <p className="time">{time.toLocaleTimeString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Clock;