import Navbar from "./Navbar";



export default function Layout({isLogged}){


    return(
        <>
            <Navbar isLogged={isLogged}/>
            <div className="bg-gray-100 w-screen h-screen">

            </div>
        </>
    )
}