import { Routes, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar"


export const ShoppingApp = () => {
  return (
    <>
        <NavBar></NavBar>
        <Routes>
{/*             <Route path="/" element={}></Route>
            <Route path="/cart" element={}></Route>
            <Route path="/*" element = {<Navigate to='/'/>}></Route> */}
        </Routes>
    </>
  )
}
