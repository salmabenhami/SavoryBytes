import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Menu=()=>{
    const [selectedMode, setSelectedMode] = useState()
    const navigate = useNavigate()
    const {name, role} = useSelector((state)=>state.auth.currentUser || {})

    

    const handleCateg =(mode, category)=>{
        const value = category.toLowerCase().replace(" ", "-")
        navigate(`/${mode}/${value}`)
    }
    console.log(name, role)

    const categories = [
        "Main Course",
        "Appetizer",
        "Side Dish",
        "Soup",
        "Salad",
        "Dessert",
        "Snack",
      ];
    return(<nav>
        <ul>
            {role === 'admin' && <li><NavLink to="/dashboard" className="a">DashBoard</NavLink></li>}
            <li><NavLink to="/" className="a">Home</NavLink></li>
            
            <li className="dropdown">
                <Link>Modes</Link>
                <div className="dropdown-content">
                    <p><NavLink to="/normal" onClick={() => setSelectedMode("normal")} className="dropdown-item">Normal</NavLink></p>
                    <p><NavLink to="/diet" onClick={() => setSelectedMode("diet")} className="dropdown-item">Diet</NavLink></p>
                    <p><NavLink to="/lactose-free" onClick={() => setSelectedMode("lactose-free")} className="dropdown-item">Lactose-free</NavLink></p>
                </div>
            </li>
            <li className="dropdown" onChange={(e)=>handleCateg(e)}>
                <Link className="dropdown-link">categories</Link>
                <div class="dropdown-content">
                    {categories.map((category) => (
                        <p
                            key={category}
                            onClick={() => handleCateg(selectedMode, category)}
                            className="dropdown-item"
                        >
                            {category}
                        </p>
                    ))}
                </div>
            </li>
            <li><NavLink to="/about" className="a"> About </NavLink></li>
            <li><NavLink to="/profil" className="a">Profil</NavLink></li>
            {role === 'admin' && <li className="dropdown">
                <Link>Manager</Link>
                <div className="dropdown-content">
                    <p><NavLink to="/manage-users" className="dropdown-item">Manage Users</NavLink></p>
                    <p><NavLink to="/manage-recepies" className="dropdown-item">Manage Recepies</NavLink></p>
                </div>
            </li>}

        </ul>
    </nav>)
}
export default Menu;