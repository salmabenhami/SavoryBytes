import React from "react";
import { useSelector } from "react-redux";

const Home =()=>{
    const {username, role} = useSelector((state)=>state.currentUser || {})
    console.log(username, role)
    return(
        <div>
            <h1>Welcome {username ? username : "Guest"}!</h1>
            <p>Your role is: {role ? role : "N/A"}</p>
        </div>
    )
    
}
export default Home;