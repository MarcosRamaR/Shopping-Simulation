import { useContext} from "react"
import { CartContext } from "../context/CartContext"
import "../styles/cartScreen.css"


export const CartScreen = () => {

  const {listItems, increaseAmount, decreaseAmount, deleteItems} = useContext(CartContext)
  const checkTotal =()=>{
    return listItems.reduce((total, item) => total + (item.price * item.amount),0).toFixed(2)
  }

  const handlePayment = () => {
    print()
  }

  return (
    <>
    <table className="table table-striped table-fixed">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Amount</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {listItems.map(item =>(
          <tr key={item.id}>
            <th> {item.title}</th>
            <td>{item.price}</td>
            <td>
              <button className="btn btn-outline-primary" onClick={() => decreaseAmount(item.id)}>-1</button>
              <button className="btn btn-primary">{item.amount}</button>
              <button className="btn btn-outline-primary" onClick={() => increaseAmount(item.id)}>+1</button>
            </td>
            <td><button type="button" className="btn btn-danger" onClick={() => deleteItems(item.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
        <th><b>Total:</b></th>
        <td></td>
        <td>${checkTotal()}</td>
        <td></td>
        </tr>
      </tfoot>
    </table>
    <div>
      <button className="btn btn-primary" onClick={handlePayment} disabled={listItems < 1}>Continue to payment</button>
    </div>
    </>
  )
}
