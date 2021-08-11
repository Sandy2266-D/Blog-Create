import React from 'react'
import{NavLink} from "react-router-dom"
function Header() 
{
    return (
        <div className="header">
            <li class="listClass">
                <NavLink class="nav-link"  exact to="/">Home
                </NavLink> 
            </li>
            <li class="listClass">
            <NavLink class="nav-link"  exact to="/about">About
                </NavLink> 
            </li>
            <li class="listClass">
            <NavLink class="nav-link"  exact to="/post">My Posts
            </NavLink> 
            </li>
        </div>
    )
}

export default Header
