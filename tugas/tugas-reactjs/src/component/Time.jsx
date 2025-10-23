import { useState, useEffect } from "react";

export const Time = () => {
  const [date, setDate] = useState(new Date());
  const [count, setCount] = useState(10);

  useEffect(() => {
    const newCount = count - 1;
    setCount(newCount);
  }, [date]);

  useEffect(() => {
    const interva = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interva);
  }, []);

  if (count == -5) {
    setCount(5);
  }

  if (count <= 0) {
    return (
      <>
      </>
    );
  }

  return (
    <div className="time">
      <div className="container_time">
        <p className="clock">Now At - {date.toLocaleTimeString()}</p>
        <p className="count">Countdown : {count}</p>
      </div>
    </div>
  );
};
