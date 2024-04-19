import React, {useState} from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home, About, Post, NotFound } from './Pages'
import Menu from './Menu'
import SideBar from './Components/SideBar'
import Button from './Components/Button'

const homeMenu = [
    {
        url: "/",
        name: "HOME"
    },
    {
        url: "/about",
        name: "ABOUT"
    },
    {
        url: "/posts",
        name: "POST"
    }
]

function App() {
    const [open, setOpen] = useState(false)

    const showSidebar = () => {
        setOpen(!open)
    }

    return(
        <div className='App'>
            <Button handleClick={showSidebar}>Menu</Button>
            <SideBar open={open}>
                <Menu menus={homeMenu}></Menu>
            </SideBar>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/about' element={<About/>}/>
                <Route path='/Posts' element={<Post/>}>
                    <Route path=':postId' element={<Post/>}/>
                </Route>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    )
}

export default App