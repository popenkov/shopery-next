import { useEffect, useRef, useState } from 'react';

import { DAY, HOUR, MILLISECONDS, MINUTE } from './time';

export const useCountDown = (endDate: string) => {
    const timeoutIdRef = useRef<NodeJS.Timeout | undefined>(undefined);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const updateCountDown = () => {
        const targetDate = new Date(endDate);
        const now = new Date();
        const timeLeft = Number(targetDate) - Number(now);

        const daysValue = Math.floor(timeLeft / DAY);
        const hoursValue = Math.floor((timeLeft % DAY) / HOUR);
        const minutesValue = Math.floor((timeLeft % HOUR) / MINUTE);
        const secondsValue = Math.floor((timeLeft % MINUTE) / MILLISECONDS);

        setDays(daysValue);
        setHours(hoursValue);
        setMinutes(minutesValue);
        setSeconds(secondsValue);

        if (timeLeft > 0) {
            timeoutIdRef.current = setTimeout(updateCountDown, 1000);
        }
    };

    useEffect(() => {
        updateCountDown();

        return () => {
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current);
            }
        };
    }, [endDate]);

    return { days, hours, minutes, seconds };
};
