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