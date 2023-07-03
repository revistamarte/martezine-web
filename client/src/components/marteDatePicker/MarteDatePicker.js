import React, { useState } from 'react';

function MarteDatePicker({ onChange }) {
    const [date, setDate] = useState("");
    
    const handleChange = (event) => {
        event.preventDefault();
        event = event.nativeEvent;
        let newDate = date;
        if (event.inputType === "insertText") {
            if (/^\d+$/.test(event.data)) {
                newDate = (date + event.data).slice(0, 8);
            }
        } else if (event.inputType === "deleteContentBackward") {
            newDate = date.slice(0, date.length - 1);
        } else {
            newDate = event.srcElement.value.split("/").join("");
        }
        event.value = newDate;
        if (onChange instanceof Function) {
            onChange(event);
        }
        setDate(newDate);
    }
    
    const getDateValue = (separator = "/") => {
        let day = date.slice(0, 2);
        let month = date.slice(2, 4);
        let year = date.slice(4);

        [day, month, year] = fixDate(day, month, year);

        let result = "";

        if (day != null) result += `${day}`;
        if (month != null) result += `${separator}${month}`;
        if (year != null) result += `${separator}${year}`;

        return result;
    }

    return (
        <input type='text' name="birthday" placeholder='data de nascimento' value={getDateValue("/")}
        onChange={handleChange} />
    )
}

export default MarteDatePicker;


const clamp = (value, min, max) => {
    return Math.min(max, Math.max(value, min));
}

const fixDate = (day, month, year) => {
    let [d, m, y] = [
        Number.parseInt(day),
        Number.parseInt(month),
        Number.parseInt(year)
    ];

    if (isNaN(y)) {
        y = -1;
    } else if (`${y}`.length >= 4) {
        y = clamp(y, 1900, new Date().getFullYear());
    }
    if (isNaN(m)) {
        m = -1;
    } else if (`${m}`.length >= 2) {
        m = clamp(m, 1, 12);
    }
    if (isNaN(d)) {
        d = -1;
    } else if (`${d}`.length >= 2) {
        d = clamp(d, 1, 31);
    }

    if (d > -1 && m > -1 && y > -1 &&
        `${year}`.length >= 4 && `${month}`.length >= 2 && `${day}`.length >= 2) {
        let isLeapYear = (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
        let max = [1, 3, 5, 7, 8, 10, 12].indexOf(m) !== -1 ? 31 : 30;
        if (m === 2) {
            if (!isLeapYear) {
                max = 28;
            } else {
                max = 29;
            }
        }
        d = clamp(d, 1, max);
    }

    day = d > -1 ? day.length === `${d}`.length ? `${d}` : `0${d}` : null;
    month = m > -1 ? month.length === `${m}`.length ? `${m}` : `0${m}` : null;
    year = y > -1 ? year.length === `${y}`.length ? `${y}` : `${"0".repeat(year.length - `${y}`.length)}${y}` : null;

    return [day, month, year];
}
