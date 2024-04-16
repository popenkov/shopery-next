import { useState, useEffect } from 'react';

type Props<T> = {
    value: T;
    delay?: number;
};

export const useDebounce = <T>(props: Props<T>) => {
    const { value, delay = 500 } = props;
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value]);

    return debouncedValue;
};
