'use client'
import { useRouter } from "next/navigation";
export default function Mainpage() {
    const router = useRouter();
    const handleTodayClick = () => {
        router.push("/today");
    }
    const handleCalendarClick = () => {
        router.push("/calendar");
    }
    const handlePriorityClick = () => {
        router.push("/priority");
    }
    return (
        <div className="Main_Contents">  
            <div onClick={handleTodayClick}>Today's Plan</div>
            <div onClick={handleCalendarClick}>Calendar</div>
            <div onClick={handlePriorityClick}>Priority</div>
        </div>
    );
}