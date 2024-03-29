import './App.css';
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState({
    hours24: '00',
    hours12: '00',
    minutes: '00',
    seconds: '00',
    ampm: ''
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const hours24 = currentDate.getHours().toString().padStart(2, '0');
      const hours12 = (parseInt(hours24) % 12 || 12).toString().padStart(2, '0');
      const ampm = parseInt(hours24) >= 12 ? 'PM' : 'AM';
      setTime({
        hours24,
        hours12,
        minutes: currentDate.getMinutes().toString().padStart(2, '0'),
        seconds: currentDate.getSeconds().toString().padStart(2, '0'),
        ampm
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="clock">
      <h2>The Time is Now</h2>
      <div id="time">
        <div>
          <span>{time.hours24}</span>
          <span>Hours (24H)</span>
        </div>
        <div>
          <span>{time.hours12}</span>
          <span>Hours (12H)</span>
        </div>
        <div>
          <span>{time.minutes}</span>
          <span>Minutes</span>
        </div>
        <div>
          <span>{time.seconds}</span>
          <span>Seconds</span>
        </div>
        <div>
          <span>{time.ampm}</span>
        </div>
      </div>
    </div>
  );
};

export default Clock;