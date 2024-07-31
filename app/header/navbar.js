'use client'    
import { useSession , signIn, signOut } from "next-auth/react";
export default function Navbar() {
    const { data: session ,status } = useSession();
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
            </div>
            )}
        </div>
    );
}