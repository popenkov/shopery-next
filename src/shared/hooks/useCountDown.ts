import { useEffect, useState } from 'react';

export const useCountDown = (endDate: string) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const updateCountDown = () => {
    const targetDate = new Date(endDate);
    const now = new Date();
    const timeLeft = Number(targetDate) - Number(now);

    const daysValue = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursValue = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesValue = Math.floor(
      (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondsValue = Math.floor((timeLeft % (1000 * 60)) / 1000);

    setDays(daysValue);
    setHours(hoursValue);
    setMinutes(minutesValue);
    setSeconds(secondsValue);
  };

  useEffect(() => {
    const countDown = setInterval(updateCountDown, 1000);

    return () => clearInterval(countDown);
  }, [endDate]);

  return { days, hours, minutes, seconds };
};
