import React from "react";
import { NavLink } from "react-router-dom";

const Menu=()=>{
    return(<nav>
        <ul>
            <li><NavLink to="/" className="a">Home</NavLink></li>
            <li className="dropdown">
                <NavLink to="/mode">Modes</NavLink>
                <div className="dropdown-content">
                    <p><NavLink to="/mode/normal">Normal</NavLink></p>
                    <p><NavLink to="/mode/diet">Diet</NavLink></p>
                    <p><NavLink to="/mode/lactose-free">Lactose-free</NavLink></p>
                </div>
            </li>
            <li className="dropdown">
                <a className="dropdown-link">categories</a>
                <div class="dropdown-content">
                    <p>Main Course</p>
                    <p>Appetizer</p>
                    <p>Side Dish</p>
                    <p>Soup</p>
                    <p>Salad</p>
                    <p>Dessert</p>
                    <p>Snack</p>
                    <p>Dessert</p>
                </div>
            </li>
        </ul>
    </nav>)
}
export default Menu;