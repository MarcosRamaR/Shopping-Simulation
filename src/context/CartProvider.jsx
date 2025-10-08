import { useReducer } from "react"
import {CartContext} from "./CartContext"

const initialState = []

const shopReducer = (state = initialState, action={}) =>{
    switch(action.type){
        case '[CART] Add Items':
            return [...state,action.payload]
        case '[CART] Increase Amount':
            return state.map(item => {
                const cant = item.amount + 1
                if(item.id === action.payload) return {...item,amount:cant}
                return item
            })
        case '[CART] Decrease Amount':
            return state.map(item => {
                const cant = item.amount - 1
                if((item.id === action.payload) && item.amount > 1) return {...item,amount:cant}
                return item
            })
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
        items.amount = 1
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
