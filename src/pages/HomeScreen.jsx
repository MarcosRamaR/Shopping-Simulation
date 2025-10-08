import "../styles/homeStyle.css"

export const HomeScreen = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the React-based marketplace simulation website</h1>
      <p>A project created for learning and practicing React</p>

      <div className="home-info">
        <h2>Basic functions:</h2>
        <ul>
          <li>Add and remove products from the shopping cart.</li>
          <li>Increase the quantity of a product already in the cart.</li>
          <li>Calculate and show the total amount to pay in real time.</li>
        </ul>
      </div>
    </div>
  )
}
