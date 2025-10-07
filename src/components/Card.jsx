import { useState } from "react"
import "../styles/cardStyle.css"

export const Card = ({image, title, description, price}) => {
    const [added, setAdded] = useState(false)

  return (
    <div className="productCard">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <p className="card-price">{price}</p>
        </div>
    {added
    ? <button type="button" className="button-delete"> Delete</button>
    :<button type="button" className="button-add">Add</button>
    }

    </div>
  )
}
