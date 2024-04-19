import React from "react";
import './Nav.css'
import { Link } from "react-router-dom";

function Nav( {list, children} ) {
    return(
        <nav>
            <ul>
                {list && list.map((item, id)=>{
                    return <li key={id}><Link to={item.url}>{item.name}</Link></li>
                })}
            </ul>
            {children}
        </nav>
    )
}
export default Nav