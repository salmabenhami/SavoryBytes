import React from "react";
import { useSelector } from "react-redux";

const Home =()=>{
    const currentUser = useSelector((state)=>state.currentUser)
    console.log(currentUser)
    return(
        <div>
            <h1>Hello {currentUser}</h1>
        </div>
    )
    
}
export default Home;