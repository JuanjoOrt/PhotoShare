import Button from "./Button";
import Hamburger from 'hamburger-react'
import SideModal from '../SideModal/SideModal'
import { useState } from "react";


export default function Navbar({user = null}){
    const [isOpen, setOpen] = useState(false)

    const handleToggle = () => setOpen(!isOpen)

    return(
        <nav className="bg-white h-12 fixed w-screen">
            <ul className="h-full sm:w-4/6 m-auto flex justify-start sm:justify-end items-center">
                <Button text='Home' className='hidden sm:block'/>
                <Button text='Random' className='hidden sm:block'/>

                <div className='block sm:hidden'><Hamburger toggled={isOpen} toggle={handleToggle}/></div>
                <SideModal visible={isOpen}/>
            </ul>
        </nav>
    )
}

