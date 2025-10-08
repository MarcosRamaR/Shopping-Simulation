import { useState } from "react"
import "../styles/cardStyle.css"

export const Card = ({image, title, description, price, handleAdd, handleDelete}) => {
    const [added, setAdded] = useState(false)

    const clickDelete = () =>{
        handleDelete()
        setAdded(false)
    }

    const clickAdd = () => {
        handleAdd()
        setAdded(true)
    }
  return (
    <div className="productCard">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <p className="card-price">{price}</p>
            {added
                ? <button type="button" className="button-delete" onClick={clickDelete} > Delete</button>
                :<button type="button" className="button-add" onClick={clickAdd} >Add</button>
            }
        </div>
    </div>
  )
}
