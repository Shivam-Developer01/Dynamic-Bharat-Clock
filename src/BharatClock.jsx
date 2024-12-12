import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BharatClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Function to format time as per 12-hour format with AM/PM
  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;  // Convert 24-hour to 12-hour format
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  // Format date as DD-MM-YYYY
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;  // January is 0
    const year = date.getFullYear();
    return `${day}-${month < 10 ? '0' + month : month}-${year}`;
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <div className="card p-4 shadow-sm">
            <h1 className="mb-4 text-primary">Bharat Clock</h1>
            <div className="display-1 mb-3">
              {formatTime(time)}
            </div>
            <div className="h4">
              {formatDate(time)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BharatClock;
