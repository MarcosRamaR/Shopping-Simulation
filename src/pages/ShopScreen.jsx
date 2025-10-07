import { useEffect, useState } from "react"
import { Card } from "../components/Card"

export const ShopScreen = () => {

    const [products, setProducts] = useState([])

    const fetchProducts = async () =>{
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        console.log(data)
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    

  return (
   <>
   <h1> Buy now</h1>
   <hr/>
    {products.map(product => (
         <Card key={product.id} image={product.image} title={product.title} description={product.description} price={product.price}></Card>
    ))}
   </>
  )
}
