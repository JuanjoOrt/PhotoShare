import Navbar from "./Navbar";



export default function Layout(isLogged){


    return(
        <>
            <Navbar isLogged={isLogged}/>
        </>
    )
}