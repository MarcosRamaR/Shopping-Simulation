import { useReducer } from "react"
import {CartContext} from "./CartContext"

const initialState = []

const shopReducer = (state = initialState, action={}) =>{
    switch(action.type){
        case '[CART] Add Items':
            return [...state,action.payload]
        case '[CART] Increase Amount':
            
        break
        case '[CART] Decrease Amount':

        break
        case '[CART] Delete Items':
            console.log("Delete button")
            return  state.filter(items => items.id !== action.payload)
        default:
            return state
    }
}

export const CartProvider = ({children}) => {

    const [listItems, dispatch] = useReducer(shopReducer, initialState)

    const addItems = (items) => {
        const action = {
            type: '[CART] Add Items',
            payload: items
        }
        dispatch(action)
    }
    const increaseAmount = (id) => {
        const action = {
            type: '[CART] Increase Amount',
            payload: id
        }
        dispatch(action)
    }
    const decreaseAmount = (id) => {
        const action = {
            type: '[CART] Decrease Amount',
            payload: id
        }
        dispatch(action)
    }
    const deleteItems = (id) => {
        const action = {
            type: '[CART] Delete Items',
            payload: id
        }
        dispatch(action)
    }


  return (
    <CartContext.Provider value={{listItems, addItems, increaseAmount, decreaseAmount, deleteItems}}>
        {children}
    </CartContext.Provider>
  )
}
