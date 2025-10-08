import { Routes, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { ShopScreen } from "./pages/ShopScreen"
import { CartScreen } from "./pages/CartScreen"
import { Navigate } from "react-router-dom"
import { ProductsProvider } from "./context/ProductsProvider"
import { CartProvider } from "./context/CartProvider"
import {HomeScreen} from "./pages/HomeScreen"


export const ShoppingApp = () => {
  return (
    <ProductsProvider>
      <CartProvider>
        <NavBar></NavBar>
        <div className="container">
            <Routes>
                <Route path="/home" element={<HomeScreen></HomeScreen>}></Route>
                <Route path="/shop" element={<ShopScreen></ShopScreen>}></Route>
                <Route path="/cart" element={<CartScreen></CartScreen>}></Route>
                <Route path="/*" element = {<Navigate to='/home' />}></Route>
            </Routes>
        </div>
      </CartProvider>
    </ProductsProvider>
  )
}
