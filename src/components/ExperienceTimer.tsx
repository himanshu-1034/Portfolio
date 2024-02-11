import { intervalToDuration } from 'date-fns';
import React, { ReactElement, useEffect, useState } from 'react'

let expInterval: any, startDate = new Date('17 March 2021');
export default function ExperienceTimer(): ReactElement {
    const [exp, setExp] = useState<any>('--');

    useEffect(() => {
        expInterval = setInterval(() => {
            let endDate = new Date()
            const { days, hours, minutes, months, seconds, years } = intervalToDuration({ start: startDate, end: endDate });
            setExp(`${years} Years, ${months} Months, ${days ?? '00'} days, ${hours ?? '00'} Hours, ${minutes ?? '00'} Minutes, ${seconds ?? '00'} Seconds`)
        }, 1000);

        return () => {
            clearInterval(expInterval);
        }
    }, [exp])

    return (
        <b>{exp}</b>
    )
}