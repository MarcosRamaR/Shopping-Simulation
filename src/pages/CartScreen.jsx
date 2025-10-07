

export const CartScreen = () => {
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
        <tr>
          <th scope="row"></th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
    <div>
      <button className="btn btn-primary">Continue to payment</button>
    </div>
    </>
  )
}
