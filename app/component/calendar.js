'use client'
import { useState } from "react";

const Calendarpage = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const getDaysInMonth = (year, month) => {
        return new Date(year, month+1 , 0).getDate();
    };

    const generateCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        console.log(daysInMonth);
        const calendar = [];
        let week = [];

        for (let i = 0; i < firstDayOfMonth; i++) {
            week.push(null);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            if (week.length === 7) {
                calendar.push(week);
                week = [];
            }
            week.push(i);
        }

        if(week.length > 0) {
            while(week.length < 7) {
                week.push(null);
            }
            calendar.push(week);
        }
        return calendar;

    };
    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(),currentDate.getMonth()-1, 1));
    };
    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(),currentDate.getMonth()+1, 1));
    };
    const calendar = generateCalendar();
    console.log(calendar);
    return (
        <div className="Calendar">
            <div className="CalendarHead">
                <button onClick={handlePrevMonth}>Prev</button>
                <h1>{currentDate.toLocaleDateString('kr', { month: 'long', year: 'numeric' })}</h1>
                <button onClick={handleNextMonth}>Next</button>
            </div>
            <div className="CalendarBody">
                <div className="DayOfWeek">
                    <div className="redday">Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
                {calendar.map((week, index) => (
                    <div className="Week" key={index}>
                        {week.map((day, index) => (
                            <div className="Day" key={index}>
                                <p>{day}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
    };


export default Calendarpage;