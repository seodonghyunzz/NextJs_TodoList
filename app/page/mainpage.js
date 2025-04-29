'use client'
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
export default function Mainpage() {
    const router = useRouter();
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const CurrentDate = date.toLocaleDateString(undefined, options);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const { data: session , status } = useSession();

    const handleTodayClick = () => {
        if (!session) {
            alert("로그인이 필요합니다!");
            return;
        }
        router.push(`/calendarDetail/${day}/${month}/${year}`);
    }
    const handleCalendarClick = () => {
        if (!session) {
            alert("로그인이 필요합니다!");
            return;
        }
        router.push("/calendar");
    }
    const handlePriorityClick = () => {
        if (!session) {
            alert("로그인이 필요합니다!");
            return;
        }
        router.push("/priority");
    }
    const handleSearchClick = () => {
        if (!session) {
            alert("로그인이 필요합니다!");
            return;
        }
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