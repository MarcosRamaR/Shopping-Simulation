import { Routes, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { ShopScreen } from "./pages/ShopScreen"
import { CartScreen } from "./pages/CartScreen"
import { Navigate } from "react-router-dom"


export const ShoppingApp = () => {
  return (
    <>
        <NavBar></NavBar>
        <div className="container">
            <Routes>
                <Route path="/" element={<ShopScreen></ShopScreen>}></Route>
                <Route path="/cart" element={<CartScreen></CartScreen>}></Route>
                <Route path="/*" element = {<Navigate to='/' />}></Route>
            </Routes>
        </div>
    </>
  )
}
