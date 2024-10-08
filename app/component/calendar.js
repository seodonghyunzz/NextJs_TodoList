'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { deletePastTodos } from "../firebase/firebase";
const Calendarpage = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const router = useRouter();
    const todayDate = new Date();
    const getDaysInMonth = (year, month) => {
        return new Date(year, month+1 , 0).getDate();
    };

    const generateCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);

        const firstDayOfMonth = new Date(year, month, 1).getDay();
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
    const planInDate = (date) => {
        const month = currentDate.getMonth()+1;
        const year = currentDate.getFullYear();
        router.push(`/calendarDetail/${date}/${month}/${year}`);
    }
    const handleDeletePastPlan = () => {
        if(confirm("오늘 이전의 계획을 모두 삭제하시겠습니까?")){
            deletePastTodos();
            alert("삭제되었습니다.");
        }
    }
    const calendar = generateCalendar();
    return (
        <div className="Calendar">
            <div className="CalendarHead">
                <button onClick={handlePrevMonth}>Prev</button>
                <h1>{currentDate.toLocaleDateString('kr', { month: 'long', year: 'numeric' })}</h1>
                <button onClick={handleNextMonth}>Next</button>
                <button onClick={handleDeletePastPlan}>
                    <Image src = "/delete.png" alt="delete" width={20} height={20}/>
                </button>
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
                        {week.map((date, index) => (
                            <div className={date === todayDate.getDate() ? "Today" : "Day"} key={index} onClick={() => date !== null && planInDate(date)}>
                                <p>{date}</p>
                                {date === todayDate.getDate() && <p className="TodayText">Today</p>}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
    };


export default Calendarpage;