import React from "react";
import { useSelector } from "react-redux";

const Home =()=>{
    const {name, role} = useSelector((state)=>state.currentUser || {})
    console.log(name, role)
    return(
        <div>
            <h1>Welcome {name ? name : "Guest"}!</h1>
            <p>Your role is: {role ? role : "N/A"}</p>
        </div>
    )
    
}
export default Home;