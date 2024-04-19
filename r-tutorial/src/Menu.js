import React from "react";
import { Link } from "react-router-dom";
import './Menu.css'
import posts from './Data/postData'

function Menu({menus}){
    return(
        <>
            {menus.map((menu, id)=>{
                return(
                    <Link key={id} to={menu.url} className="menu-item">{menu.name}</Link>
                )
            })}
        </>
    )
}
export default Menu

// {/** 포스트 메뉴 */}
// {posts.map((post, id)=> {
//     return(
//         <Link key={id} to={`/posts/${id}`} className="menu-item">
//             {post.title}
//         </Link>
//     )
// })}