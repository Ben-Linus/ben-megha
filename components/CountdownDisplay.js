import { useEffect, useState } from "react";

function CountdownDisplay({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 justify-center">
      <CountBlock number={timeLeft.days} label="Days" />
      <CountBlock number={timeLeft.hours} label="Hours" />
      <CountBlock number={timeLeft.minutes} label="Minutes" />
      <CountBlock number={timeLeft.seconds} label="Seconds" />
    </div>
  );
}

function CountBlock({ number, label }) {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold">{number ?? 0}</div>
      <div className="text-sm md:text-base text-gray-700">{label}</div>
    </div>
  );
}

export default CountdownDisplay;
