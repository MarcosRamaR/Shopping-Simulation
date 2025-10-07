import { useContext} from "react"
import { CartContext } from "../context/CartContext"


export const CartScreen = () => {

  const {listItems, increaseAmount, decreaseAmount, deleteItems} = useContext(CartContext)

  return (
    <>
    <table className="table table-dark table-striped">
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
            <td>1</td>
            <td><button type="button" className="btn btn-danger" onClick={() => deleteItems(item.id)}>Delete</button></td>
          </tr>
        ))}

      </tbody>
    </table>
    <div>
      <button className="btn btn-primary">Continue to payment</button>
    </div>
    </>
  )
}
