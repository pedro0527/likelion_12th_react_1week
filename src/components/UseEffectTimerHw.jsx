import React, { useEffect, useState } from "react";

const UseEffectTimerHw = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const nextWednesday = new Date();
    nextWednesday.setDate(now.getDate() + ((3 - now.getDay() + 7) % 7)); 
    nextWednesday.setHours(18, 30, 0, 0);

    const left = nextWednesday - now;

    let timeLeft = {};

    if (left > 0) {
        timeLeft = {
            일: Math.floor(left / (1000 * 60 * 60 * 24)),
            시간: Math.floor((left / (1000 * 60 * 60)) % 24),
            분: Math.floor((left / (1000 * 60)) % 60),
            초: Math.floor((left / 1000) % 60)
        };
    }
    return timeLeft;
};

const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {
    const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => {
      clearTimeout(timer);
    }
});

const timerComponents = [];

Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
        return;
    }
    timerComponents.push(
        <span key={interval}>
            {timeLeft[interval]}{interval}{" "}
        </span>
    );
});

return (
    <div>
        <h1>다음 주 수요일 18시 30분까지 남은 시간</h1>
        {timerComponents}
    </div>
);
}
  
export default UseEffectTimerHw;
