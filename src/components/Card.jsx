
import "../styles/cardStyle.css"

export const Card = ({image, title, description, price, handleAdd, handleDelete, isAdded}) => {
    

  return (
    <div className="productCard">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <p className="card-price">{price}</p>
            {isAdded
                ? <button type="button" className="button-delete" onClick={handleDelete} > Delete</button>
                :<button type="button" className="button-add" onClick={handleAdd} >Add</button>
            }
        </div>
    </div>
  )
}
