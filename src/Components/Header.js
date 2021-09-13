import React from "react";
import { NavLink } from "react-router-dom";

const Header = () =>{
    return(
        <header className ="header">
            <nav>
                <ul>
                    <li>
                        <NavLink exact to ='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to ='/about'>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to ='/products'>
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to ='/rocks-basket'>
                            Basket
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;