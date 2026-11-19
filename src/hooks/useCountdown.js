import { useState, useEffect } from "react";

function calculateTimeLeft(targetIso) {
  const targetTime = new Date(targetIso).getTime();
  const now = Date.now();
  const difference = targetTime - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isCompleted: true,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isCompleted: false,
  };
}

export function useCountdown(targetIso) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetIso));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetIso));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetIso]);

  return timeLeft;
}