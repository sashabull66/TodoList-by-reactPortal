import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <div className="nav-wrapper">
                <NavLink to="/" className="brand-logo">TodoList</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/" exact>Задачи</NavLink></li>
                    <li><NavLink to="/info">Информация</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

const styles = {
    nav: {
        padding: '0 2rem'
    }
}