import {Badge} from "@mui/material"
import {ShoppingCart} from "@mui/icons-material"
import { NavLink } from "react-router-dom"
import { useContext} from "react"
import { CartContext } from "../context/CartContext"
import "../styles/navBarStyle.css"



export const NavBar = () => {

    const {listItems} = useContext(CartContext)
    
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <NavLink to='/home' className="navbar-brand" href="#">Shopping</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink to='/shop' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Compras</NavLink>
                </li>
            </ul>
            <NavLink to='/cart'>
                <Badge badgeContent={listItems.length} color="secondary">
                    <ShoppingCart color="action"/>
                </Badge>
            </NavLink>
            </div>
        </div>
    </nav>
  )
}
