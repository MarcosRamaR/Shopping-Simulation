import { useContext } from "react"
import { Card } from "../components/Card"
import { ProductsContext } from "../context/ProductsContext"
import { CartContext } from "../context/CartContext"

export const ShopScreen = () => {

    const {products} = useContext(ProductsContext)
    const {addItems, deleteItems} = useContext(CartContext)
    
    const handleAdd = (items) => {
      addItems(items)
    }
    const handleDelete = (id) => {
      deleteItems(id)
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
 