import { useContext } from "react"
import { Card } from "../components/Card"
import { ProductsContext } from "../context/ProductsContext"
import { CartContext } from "../context/CartContext"

export const ShopScreen = () => {

    const {products} = useContext(ProductsContext)
    const {listItems, addItems, increaseAmount, decreaseAmount, deleteItems} = useContext(CartContext)
    
    const handleAdd = (items) => {
      addItems(items)
    }
    const handleDelete = (id) => {
      deleteItems(id)
    }
    const handleIncrease = (id) => {

    }
    const handleDecrease = (id) => {

    }

  return (
   <>
   <h1> Buy now</h1>
   <hr/>
    {products.map(product => (
      <Card key={product.id} 
        image={product.image} 
        title={product.title} 
        description={product.description} 
        price={product.price}
        handleAdd ={() => handleAdd(product)}
        handleDelete={() => handleDelete(product.id)}
        >
      </Card>
    ))}
   </>
  )
}
 