import React from "react";
import logo from '../LARS_LOGO.png'
import Input from "./Input";
import Nav from "./Nav"
import './Header.css'
import { Link } from "react-router-dom"

const navList = [
    {
        url : '/',
        name : 'Work'
    },
    {
        url : '/about',
        name : 'About'
    } 
]

function Header () {
    return(
        <header>
            <div className="img-box">
                <Link to='/'><img src={logo}/></Link>
            </div>
            <Nav list={navList}></Nav>
        </header>
    )
}
export default Header
