import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Menu=()=>{
    const [selectedMode, setSelectedMode] = useState()
    const navigate = useNavigate()
    const {name, role} = useSelector((state)=>state.currentUser || {})

    

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
                    <p><NavLink to="/normal" onClick={() => setSelectedMode("normal")}>Normal</NavLink></p>
                    <p><NavLink to="/diet" onClick={() => setSelectedMode("diet")}>Diet</NavLink></p>
                    <p><NavLink to="/lactose-free" onClick={() => setSelectedMode("lactose-free")}>Lactose-free</NavLink></p>
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
            {role === 'admin' && <li className="dropdown">
                <Link>Manager</Link>
                <div className="dropdown-content">
                    <p><NavLink to="/manage-users" >Manage Users</NavLink></p>
                    <p><NavLink to="/manage-recepies">Manage Recepies</NavLink></p>
                </div>
            </li>}

        </ul>
    </nav>)
}
export default Menu;