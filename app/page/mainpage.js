'use client'
import { useRouter } from "next/navigation";
export default function Mainpage() {
    const router = useRouter();
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const CurrentDate = date.toLocaleDateString(undefined, options);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    

    const handleTodayClick = () => {
        router.push(`/calendarDetail/${day}/${month}/${year}`);
    }
    const handleCalendarClick = () => {
        router.push("/calendar");
    }
    const handlePriorityClick = () => {
        router.push("/priority");
    }
    const handleSearchClick = () => {
        router.push("/search");
    }
    return (
        <div className="Main_Contents">  
            <div onClick={handleCalendarClick}>Calendar</div>
            <div onClick={handleTodayClick}>Today's</div>
            <div onClick={handlePriorityClick}>Priority</div>
            <div onClick={handleSearchClick}>Search</div>
        </div>
    );
}