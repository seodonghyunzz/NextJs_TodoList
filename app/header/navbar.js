'use client'    
import { useSession , signIn, signOut } from "next-auth/react";
import Image from "next/image";
export default function Navbar() {
    const { data: session , status } = useSession();
    const date = new Date();
    const todayDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
    
    return (
        
        <div className="Navbar">
            {!session?(
            <>
               <button onClick={signIn}>login</button> 
            </>
            ):(
            <div className="User_Info">
                <p>{session.user?.name}</p>
                <button onClick={signOut}>logout</button>
                <p>{todayDate}</p>
            </div>
            )}
        </div>
    );
}